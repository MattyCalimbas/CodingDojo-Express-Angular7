import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IbuMildComponent } from './ibumild/ibumild.component';
import { IbuMediumComponent } from './ibu-medium/ibu-medium.component';
import { IbuHighComponent } from './ibu-high/ibu-high.component';
import { HomeComponent } from './home/home.component';
import { AbvHighComponent } from './abv-high/abv-high.component';
import { AbvMediumComponent } from './abv-medium/abv-medium.component';
import { AbvLiteComponent } from './abv-lite/abv-lite.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  { path: '', component:HomeComponent},
  { path:'ibu/mild', component:IbuMildComponent},
  { path:'ibu/medium', component:IbuMediumComponent},
  { path:'ibu/bitter', component:IbuHighComponent},
  { path:'abv/light', component:AbvLiteComponent},
  { path:'abv/med', component:AbvMediumComponent},
  { path:'abv/high', component:AbvHighComponent},
  { path:'favorites', component:FavoritesComponent},
  { path: 'beer/:id', component:DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
