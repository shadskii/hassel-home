import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { RecipesModule } from './recipes/recipes.module';
import { ChristmasCardsModule } from './christmas-cards/christmas-cards.module';
import { JakeModule } from './jake/jake.module';
import { LoriModule } from './lori/lori.module';
import { NancyModule } from './nancy/nancy.module';
import { MarkModule } from './mark/mark.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    RecipesModule,
    ChristmasCardsModule,
    JakeModule,
    LoriModule,
    NancyModule,
    MarkModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class PagesModule {
}
