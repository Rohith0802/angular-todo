import { NgModule } from '@angular/core';
import { PersonalComponent } from './personal/personal.component';
import { SecurityComponent } from './security/security.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingRoutingModule } from './setting-routing.module';
import { AllSettingsComponent } from './all-settings/all-settings.component';
import { CommonModule } from '../common/common.module';

@NgModule({
    declarations: [
        SettingsComponent,
        PersonalComponent,
        SecurityComponent,
        AllSettingsComponent,
    ],
    imports: [SettingRoutingModule, CommonModule],
})
export class SettingModule {}
