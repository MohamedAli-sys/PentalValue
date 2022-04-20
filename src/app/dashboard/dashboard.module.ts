import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MaterialModule } from '../Modules/material/material.module';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [DashboardComponent, WelcomeComponent],
  imports: [CommonModule, DashboardRoutingModule, MaterialModule],
})
export class DashboardModule {}
