import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-embedded-lab-dialog',
  templateUrl: './add-embedded-lab-dialog.component.html',
  styleUrls: ['./add-embedded-lab-dialog.component.scss'],
})
export class AddEmbeddedLabDialogComponent implements OnInit {
  doorID = new FormControl('');
  name = new FormControl('');
  constructor(
    public dialogRef: MatDialogRef<AddEmbeddedLabDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {}
  submit() {
    if (this.doorID.value) {
      this.dialogRef.close({
        doorID: this.doorID.value,
        name: this.name.value,
      });
    } else {
      alert('Please insert the infomation before submit.');
    }
  }
}
