import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { LocationsComponent } from './locations/locations.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:"",component:MainComponent},
  {path:"characters",component:CharactersComponent},
  {path:"locations",component:LocationsComponent},
  {path:"episodes",component:EpisodesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
