import {
  MatButtonModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatMenuModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatInputModule,
  MatFormFieldModule,
} from '@angular/material';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
const modules = [
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSidenavModule,
  MatCardModule,
  MatDividerModule,
  MatIconModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatMenuModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatInputModule,
  MatFormFieldModule,
];

@NgModule({
  imports: modules,
  exports: modules,
})
export class MaterialModule {}
