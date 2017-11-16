import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { MarkComponent } from './mark.component';

@NgModule({
    imports: [
        ThemeModule,
    ],
    declarations: [MarkComponent],
})
export class MarkModule { }
