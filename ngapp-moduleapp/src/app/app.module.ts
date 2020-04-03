import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
//built in submodule : browser core features
import { BrowserModule } from '@angular/platform-browser';
import { GreeterModule } from './greeter/greeter.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule, GreeterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }