import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';

import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from 'src/app/Modules/material/material.module';

export const routes: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
})
export class LoginModule {}
