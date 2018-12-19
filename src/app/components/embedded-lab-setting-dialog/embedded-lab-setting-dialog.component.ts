import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmbeddedLabService } from 'src/app/services/embedded-lab.service';
import { FormControl } from '@angular/forms';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-embedded-lab-setting-dialog',
  templateUrl: './embedded-lab-setting-dialog.component.html',
  styleUrls: ['./embedded-lab-setting-dialog.component.scss'],
})
export class EmbeddedLabSettingDialogComponent implements OnInit {
  old_fr: string;
  old_to: string;
  fr = new FormControl();
  to = new FormControl();
  onRequest: boolean;
  isInWhitelist = new FormControl(false);
  oldInWhitelist: boolean;
  constructor(
    public dialogRef: MatDialogRef<EmbeddedLabSettingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private embedded: EmbeddedLabService,
  ) {}
  ngOnInit() {
    console.log(this.data);
    this.onRequest = true;
    this.embedded
      .getSetting(this.data.doorID)
      .get()
      .subscribe(
        snapshot => {
          let setting;
          if (snapshot.exists) {
            setting = snapshot.data();
          } else {
            setting = { from: null, to: null, whitelist: false };
            this.embedded.getSetting(this.data.doorID).set(setting);
          }
          this.onRequest = false;
          if (setting) {
            if (setting.to) {
              const to = moment(new Date(setting.to)).tz('Asia/Bangkok');
              this.to.setValue(to.format('HH:mm:ss'), { emitEvent: true });
              this.old_to = to.format('HH:mm:ss');
            }
            if (setting.from) {
              const fr = moment(new Date(setting.from)).tz('Asia/Bangkok');
              this.fr.setValue(fr.format('HH:mm:ss'), { emitEvent: true });
              this.old_fr = fr.format('HH:mm:ss');
            }
            if (setting.whitelist) {
              this.isInWhitelist.setValue(true, { emitEvent: true });
              this.oldInWhitelist = true;
            } else {
              this.oldInWhitelist = false;
            }
          }
        },
        error => {
          this.onRequest = false;
          throw error;
        },
      );
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  submit() {
    if (this.oldInWhitelist !== this.isInWhitelist.value) {
      this.embedded
        .setWhitelist(this.data.doorID, this.isInWhitelist.value)
        .subscribe();
    }
    if (
      this.fr.value &&
      this.to.value &&
      (this.old_fr !== this.fr.value || this.old_to !== this.to.value)
    ) {
      const [to_h, to_m] = this.to.value.split(':');
      const [fr_h, fr_m] = this.fr.value.split(':');
      const fr = new Date();
      fr.setHours(fr_h);
      fr.setMinutes(fr_m);
      fr.setSeconds(0);
      const to = new Date();
      to.setHours(to_h);
      to.setMinutes(to_m);
      to.setSeconds(0);
      this.embedded.setDontDisturb(this.data.doorID, fr, to).subscribe();
    } else if (!this.fr.value && !this.to.value) {
      this.embedded.removeDontDisturb(this.data.doorID);
    }
    this.dialogRef.close();
  }
}
