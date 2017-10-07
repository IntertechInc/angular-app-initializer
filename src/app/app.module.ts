import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { AppLoadModule } from './app-load/app-load.module';
=======
>>>>>>> 50cec3a65f58ed6a7e6a172fd053b1ed69cde11c

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
<<<<<<< HEAD
    BrowserModule,
    AppLoadModule
=======
    BrowserModule
>>>>>>> 50cec3a65f58ed6a7e6a172fd053b1ed69cde11c
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
