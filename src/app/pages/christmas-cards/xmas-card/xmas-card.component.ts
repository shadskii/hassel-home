import { Component, Input } from '@angular/core';
import { ChristmasCard } from '../../../@core/data/christmas-card';

@Component({
    selector: 'xmas-card',
    styleUrls: ['./xmas-card.component.scss'],
    templateUrl: './xmas-card.component.html',
})
export class XmasCardComponent {

    myCard: ChristmasCard;
    year: string;
    selected: string;

    @Input()
    public set card(c: ChristmasCard) {
        this.myCard = c;
        this.year = c.year;
        this.selected = c.front;
    }

    isSingleView = false;

    public changeImg(img: string) {
        this.selected = img;
        this.isSingleView = true;
    }
}
