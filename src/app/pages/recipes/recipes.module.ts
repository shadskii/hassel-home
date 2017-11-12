import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { RecipesComponent } from './recipes.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';

@NgModule({
    imports: [
        ThemeModule,

    ],
    declarations: [
        RecipesComponent,
        RecipeCardComponent
    ],
})
export class RecipesModule { }
