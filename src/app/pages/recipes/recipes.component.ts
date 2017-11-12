import { Component } from '@angular/core';
import { RecipesService } from '../../@core/data/recipes.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Recipe } from '../../@core/data/recipe';
@Component({
    selector: 'recipes-root',
    styleUrls: ['./recipes.component.scss'],
    templateUrl: './recipes.component.html',
})
export class RecipesComponent implements OnInit {

    recipes: Recipe[];
    constructor(private recipesService: RecipesService) {
    }

    ngOnInit() {
        this.recipesService.getRecipes().subscribe((recipe: any) => {
            this.recipes = recipe;
        });
    }
}
