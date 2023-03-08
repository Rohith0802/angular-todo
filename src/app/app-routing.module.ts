import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ToDoComponent } from './to-do/to-do/to-do.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        data: { title: 'login - To Do' },
    },
    {
        path: 'todo',
        component: ToDoComponent,
        canActivate: [AuthGuard],
        data: { title: 'To Do' },
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard, AuthService],
})
export class AppRoutingModule {}
