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
        new ChristmasCard(
            '2013',
            'assets/images/christmasCards/2013-front-xmas.png',
            'assets/images/christmasCards/2013-back-xmas.png',
            'assets/images/christmasCards/2013-content-xmas.png',
        ),
        new ChristmasCard(
            '2012',
            'assets/images/christmasCards/2012-front-xmas.png',
            'assets/images/christmasCards/2012-back-xmas.png',
            'assets/images/christmasCards/2012-content-xmas.png',
        ),
        new ChristmasCard(
            '2011',
            'assets/images/christmasCards/2011-front-xmas.png',
            'assets/images/christmasCards/2011-back-xmas.png',
            'assets/images/christmasCards/2011-content-xmas.png',
        ),
        new ChristmasCard(
            '2010',
            'assets/images/christmasCards/2010-front-xmas.jpg',
            'assets/images/christmasCards/2010-back-xmas.jpg',
            'assets/images/christmasCards/2010-content-xmas.jpg',
        ),
        new ChristmasCard(
            '2008',
            'assets/images/christmasCards/2008-front-xmas.jpg',
            'assets/images/christmasCards/2008-back-xmas.jpg',
            'assets/images/christmasCards/2008-content-xmas.jpg',
        ),
        new ChristmasCard(
            '2007',
            'assets/images/christmasCards/2007-front-xmas.jpg',
            'assets/images/christmasCards/2007-back-xmas.jpg',
            'assets/images/christmasCards/2007-content-xmas.jpg',
        ),
        new ChristmasCard(
            '2006',
            'assets/images/christmasCards/2006-front-xmas.jpg',
            'assets/images/christmasCards/2006-back-xmas.jpg',
            'assets/images/christmasCards/2006-content-xmas.jpg',
        ),
        new ChristmasCard(
            '2005',
            'assets/images/christmasCards/2005-front-xmas.jpg',
            'assets/images/christmasCards/2005-back-xmas.jpg',
            'assets/images/christmasCards/2005-content-xmas.jpg',
        ),
        new ChristmasCard(
            '2004',
            'assets/images/christmasCards/2004-front-xmas.jpg',
            'assets/images/christmasCards/2004-back-xmas.jpg',
            'assets/images/christmasCards/2004-content-xmas.jpg',
        ),
        new ChristmasCard(
            '2003',
            'assets/images/christmasCards/2003-front-xmas.jpg',
            'assets/images/christmasCards/2003-back-xmas.jpg',
            'assets/images/christmasCards/2003-content-xmas.jpg',
        ),
        new ChristmasCard(
            '2002',
            'assets/images/christmasCards/2002-front-xmas.jpg',
            'assets/images/christmasCards/2002-back-xmas.jpg',
            'assets/images/christmasCards/2002-content-xmas.jpg',
        ),
        new ChristmasCard(
            '2001',
            'assets/images/christmasCards/2001-front-xmas.jpg',
            'assets/images/christmasCards/2001-back-xmas.jpg',
            'assets/images/christmasCards/2001-content-xmas.jpg',
        ),
        new ChristmasCard(
            '2000',
            'assets/images/christmasCards/2000-front-xmas.jpg',
            'assets/images/christmasCards/2000-back-xmas.jpg',
            'assets/images/christmasCards/2000-content-xmas.jpg',
        ),
        new ChristmasCard(
            '1999',
            'assets/images/christmasCards/1999-front-xmas.jpg',
            'assets/images/christmasCards/1999-back-xmas.jpg',
            'assets/images/christmasCards/1999-content-xmas.jpg',
        ),
        new ChristmasCard(
            '1998',
            'assets/images/christmasCards/1998-front-xmas.jpg',
            'assets/images/christmasCards/1998-back-xmas.jpg',
            'assets/images/christmasCards/1998-content-xmas.jpg',
        ),
        new ChristmasCard(
            '1997',
            'assets/images/christmasCards/1997-front-xmas.jpg',
            'assets/images/christmasCards/1997-back-xmas.jpg',
            'assets/images/christmasCards/1997-content-xmas.jpg',
        )
    ];

    constructor() { }

    getCards(): Observable<ChristmasCard[]> {
        return Observable.of(this.cards);
    }
}
