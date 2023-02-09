import { NgModule } from '@angular/core';
import { CommonModule } from './common/common.module';

import { AppComponent } from './app.component';
import { DynamicModule } from './dynamic/dynamic.module';
import { SettingsComponent } from './dynamic/settings/settings.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [AppComponent, SettingsComponent],
    imports: [CommonModule, DynamicModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
