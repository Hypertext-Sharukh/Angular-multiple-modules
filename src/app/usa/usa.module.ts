import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsaRoutingModule } from './usa-routing.module';
import { UsaComponent } from './usa.component';
import { CaliforniaComponent } from './california/california.component';
import { CharloteComponent } from './charlote/charlote.component';


@NgModule({
  declarations: [ CaliforniaComponent, CharloteComponent],
  exports:[ CaliforniaComponent, CharloteComponent],
  imports: [
    CommonModule,
    UsaRoutingModule
  ]
})
export class UsaModule { }
