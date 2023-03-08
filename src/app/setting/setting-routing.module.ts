import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { PersonalComponent } from './personal/personal.component';
import { SecurityComponent } from './security/security.component';
import { AllSettingsComponent } from './all-settings/all-settings.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
    {
        path: 'settings',
        component: AllSettingsComponent,
        canActivate: [AuthGuard],
        data: { title: 'Settings - To Do' },
        children: [
            {
                path: '',
                component: SettingsComponent,
            },
            {
                path: 'personal',
                component: PersonalComponent,
            },
            {
                path: 'security',
                component: SecurityComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SettingRoutingModule {}
