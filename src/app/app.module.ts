import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainCommonModule } from './common/main-common.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, MainCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
