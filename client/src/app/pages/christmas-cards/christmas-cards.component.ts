import { Component, OnInit } from '@angular/core';
import { ChristmasCardService } from '../../@core/data/christmas-card.service';
import { ChristmasCard } from '../../@core/data/christmas-card';
@Component({
    selector: 'christmas-cards-root',
    styleUrls: ['./christmas-cards.component.scss'],
    templateUrl: './christmas-cards.component.html',
})
export class ChristmasCardsComponent implements OnInit {

    constructor(private cardService: ChristmasCardService) { }

    cards: ChristmasCard[];
    ngOnInit() {
        this.cardService.getCards().subscribe((c: ChristmasCard[]) => {
            this.cards = c;
        });
    }
}