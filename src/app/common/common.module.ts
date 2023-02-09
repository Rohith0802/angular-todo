import { NgModule } from '@angular/core';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    declarations: [NavBarComponent],
    imports: [AppRoutingModule],
    exports: [NavBarComponent],
})
export class CommonModule {}
