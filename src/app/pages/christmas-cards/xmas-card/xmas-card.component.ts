import { Component, Input } from '@angular/core';
import { ChristmasCard } from '../../../@core/data/christmas-card';

@Component({
    selector: 'xmas-card',
    styleUrls: ['./xmas-card.component.scss'],
    templateUrl: './xmas-card.component.html',
})
export class XmasCardComponent {

    myCard: ChristmasCard;
    cameras: any[];
    selectedCamera: any;
    year: string;
    selected: string;

    @Input()
    public set card(c: ChristmasCard) {
        this.myCard = c;
        this.year = c.year;
        this.selected = c.front;
        this.cameras = [{
            title: 'Front',
            source: c.front,
        }, {
            title: 'Back',
            source: c.back,
        }, {
            title: 'Content',
            source: c.content,
        }];
        this.selectCamera = this.cameras[0];
    }

    isSingleView = false;

    public changeImg(img: string) {
        this.selected = img;
        this.isSingleView = true;
    }

    selectCamera(camera: any) {
        // this.selectedCamera = camera;
        this.isSingleView = true;
    }
}
