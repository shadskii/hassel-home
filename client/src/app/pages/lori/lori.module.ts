import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { LoriComponent } from './lori.component';

@NgModule({
    imports: [
        ThemeModule,
    ],
    declarations: [LoriComponent],
})
export class LoriModule { }
