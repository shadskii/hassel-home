import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { JakeComponent } from './jake.component';

@NgModule({
    imports: [
        ThemeModule,
    ],
    declarations: [JakeComponent],
})
export class JakeModule { }
