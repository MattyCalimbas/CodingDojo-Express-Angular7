import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { HttpService } from './http.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IbuMildComponent } from './ibumild/ibumild.component';
import { IbuMediumComponent } from './ibu-medium/ibu-medium.component';
import { IbuHighComponent } from './ibu-high/ibu-high.component';
import { HomeComponent } from './home/home.component';
import { AbvHighComponent } from './abv-high/abv-high.component';
import { AbvMediumComponent } from './abv-medium/abv-medium.component';
import { AbvLiteComponent } from './abv-lite/abv-lite.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    IbuMildComponent,
    IbuMediumComponent,
    IbuHighComponent,
    HomeComponent,
    AbvHighComponent,
    AbvMediumComponent,
    AbvLiteComponent,
    FavoritesComponent,
    DetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
