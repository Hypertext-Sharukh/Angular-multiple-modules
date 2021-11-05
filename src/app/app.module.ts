import { IndiaComponent } from './india/india.component';
import { UsaModule } from './usa/usa.module';
import { IndiaModule } from './india/india.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsaComponent } from './usa/usa.component';

@NgModule({
  declarations: [
    AppComponent,
    IndiaComponent,
    UsaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IndiaModule,
    UsaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
