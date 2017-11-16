import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserService } from './users.service';
import { ElectricityService } from './electricity.service';
import { StateService } from './state.service';
import { PlayerService } from './player.service';
import { RecipesService } from './recipes.service';
import { ChristmasCardService } from './christmas-card.service';

const SERVICES = [
  UserService,
  ElectricityService,
  StateService,
  PlayerService,
  RecipesService,
  ChristmasCardService
];

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    ...SERVICES,
  ],
})
export class DataModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: DataModule,
      providers: [
        ...SERVICES,
      ],
    };
  }
}
