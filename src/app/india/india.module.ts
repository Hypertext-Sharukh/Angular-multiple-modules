import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndiaRoutingModule } from './india-routing.module';
import { IndiaComponent } from './india.component';
import { AndraPradeshComponent } from './andra-pradesh/andra-pradesh.component';
import { TelanganaComponent } from './telangana/telangana.component';


@NgModule({
  declarations: [ AndraPradeshComponent, TelanganaComponent],
  exports:[ AndraPradeshComponent, TelanganaComponent],
  imports: [
    CommonModule,
    IndiaRoutingModule
  ]
})
export class IndiaModule { }
