import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolygonComponent } from './polygon/polygon.component'
import { SearchMapComponent } from './search-map/search-map.component'
const routes: Routes = [
  { path: 'search', component: SearchMapComponent },
  { path: 'polygon', component: PolygonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
