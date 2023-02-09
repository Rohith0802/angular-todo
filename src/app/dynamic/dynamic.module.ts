import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CategoryListComponent } from './category-list/category-list.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TaskContainerComponent } from './task-container/task-container.component';
import { TaskListComponent } from './task-list/task-list.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        CategoryListComponent,
        SideNavComponent,
        TaskContainerComponent,
        TaskListComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    exports: [
        CategoryListComponent,
        SideNavComponent,
        TaskContainerComponent,
        TaskListComponent,
    ],
})
export class DynamicModule {}
