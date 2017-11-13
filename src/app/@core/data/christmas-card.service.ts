import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ChristmasCard } from './christmas-card';


@Injectable()
export class ChristmasCardService {

    private cards = [
        new ChristmasCard(
            '2016',
            'assets/images/christmasCards/2016-front-xmas.png',
            'assets/images/christmasCards/2016-back-xmas.png',
            'assets/images/christmasCards/2016-content-xmas.png',
        ),
        new ChristmasCard(
            '2015',
            'assets/images/christmasCards/2015-front-xmas.png',
            'assets/images/christmasCards/2015-back-xmas.png',
            'assets/images/christmasCards/2015-content-xmas.png',
        ),
        new ChristmasCard(
            '2014',
            'assets/images/christmasCards/2014-front-xmas.png',
            'assets/images/christmasCards/2014-back-xmas.png',
            'assets/images/christmasCards/2014-content-xmas.png',
        ),
    ];

    constructor() { }

    getCards(): Observable<ChristmasCard[]> {
        return Observable.of(this.cards);
    }
}
