import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { ChristmasCardsComponent } from './christmas-cards.component';
import { XmasCardComponent } from './xmas-card/xmas-card.component';


@NgModule({
    imports: [
        ThemeModule,
    ],
    declarations: [
        ChristmasCardsComponent,
        XmasCardComponent
    ],
})
export class ChristmasCardsModule { }
