import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmbeddedLabService } from 'src/app/services/embedded-lab.service';

@Component({
  selector: 'app-embedded-lab-setting-dialog',
  templateUrl: './embedded-lab-setting-dialog.component.html',
  styleUrls: ['./embedded-lab-setting-dialog.component.scss']
})
export class EmbeddedLabSettingDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EmbeddedLabSettingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private embedded: EmbeddedLabService,
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }
  ngOnInit() {}
  submit() {
    // this.embedded.deleteItem(this.data.doorID).subscribe();
    this.dialogRef.close();
  }
}
