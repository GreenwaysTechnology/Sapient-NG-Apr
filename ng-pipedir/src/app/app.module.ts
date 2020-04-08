import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DecimalFractionPipe } from './pipes/decimalfraction.pipe';
import { HighLightDirective } from './driectives/app.highlight.directive';


@NgModule({
  declarations: [
    AppComponent, DecimalFractionPipe, HighLightDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
