import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmbeddedLabService } from 'src/app/services/embedded-lab.service';

@Component({
  selector: 'app-delete-embedded-lab-dialog',
  templateUrl: './delete-embedded-lab-dialog.component.html',
  styleUrls: ['./delete-embedded-lab-dialog.component.scss'],
})
export class DeleteEmbeddedLabDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DeleteEmbeddedLabDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private embedded: EmbeddedLabService,
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }
  ngOnInit() {}
  submit() {
    this.embedded.deleteItem(this.data.doorID).subscribe();
    this.dialogRef.close();
  }
}
