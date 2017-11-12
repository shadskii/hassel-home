import { NgModule } from '@angular/core';
import { NancyComponent } from './nancy.component';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
    imports: [
        ThemeModule,
    ],
    declarations: [NancyComponent],
})
export class NancyModule { }
