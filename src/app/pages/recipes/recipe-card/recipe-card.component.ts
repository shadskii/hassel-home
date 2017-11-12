import { Component, OnDestroy, Input } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { Recipe } from '../../../@core/data/recipe';

@Component({
    selector: 'recipe-card',
    styleUrls: ['./recipe-card.component.scss'],
    templateUrl: './recipe-card.component.html',
})
export class RecipeCardComponent implements OnDestroy {

    @Input() recipe: Recipe;

    currentTheme: string;
    themeSubscription: any;

    constructor(private themeService: NbThemeService) {
        this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
            this.currentTheme = theme.name;
        });
    }

    ngOnDestroy() {
        this.themeSubscription.unsubscribe();
    }
}
