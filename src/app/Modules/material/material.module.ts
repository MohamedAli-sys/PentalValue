import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
const material = [
  MatButtonModule,
  MatCardModule,
  LayoutModule,
  MatToolbarModule,
  MatSidenavModule,
  MatTooltipModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatSelectModule,
  ReactiveFormsModule,
  MatTableModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
];

@NgModule({
  imports: material,
  exports: material,
})
export class MaterialModule {}
