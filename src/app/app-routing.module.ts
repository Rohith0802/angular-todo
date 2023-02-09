import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavComponent } from './dynamic/side-nav/side-nav.component';
import { TaskContainerComponent } from './dynamic/task-container/task-container.component';
import { SettingsComponent } from './dynamic/settings/settings.component';

const routes: Routes = [
    {
        path: 'todo',
        component: SideNavComponent,
    },
    {
        path: 'todo',
        component: TaskContainerComponent,
    },
    {
        path: 'settings',
        component: SettingsComponent,
    },
    {
        path: '',
        redirectTo: '/todo',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
