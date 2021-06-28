import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PolygonComponent } from './polygon/polygon.component';
import { SearchMapComponent } from './search-map/search-map.component';

@NgModule({
  declarations: [
    AppComponent,
    PolygonComponent,
    SearchMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
