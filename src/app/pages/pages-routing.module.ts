import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ChristmasCardsComponent } from './christmas-cards/christmas-cards.component';
import { JakeComponent } from './jake/jake.component';
import { LoriComponent } from './lori/lori.component';
import { NancyComponent } from './nancy/nancy.component';
import { MarkComponent } from './mark/mark.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  }, {
    path: 'recipes',
    component: RecipesComponent,
  }, {
    path: 'christmas-cards',
    component: ChristmasCardsComponent
  }, {
    path: 'jake',
    component: JakeComponent
  },
  {
    path: 'lori',
    component: LoriComponent
  },
  {
    path: 'nancy',
    component: NancyComponent
  },
  {
    path: 'mark',
    component: MarkComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
