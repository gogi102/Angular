import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiHeaderComponent } from './layout/ui-header/ui-header.component';
import { UiFooterComponent } from './layout/ui-footer/ui-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    UiHeaderComponent,
    UiFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
