import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ChristmasCardsComponent } from './christmas-cards.component';

@NgModule({
    imports: [
        ThemeModule,
    ],
    declarations: [ChristmasCardsComponent],
})
export class ChristmasCardsModule { }
