import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CategoryListComponent } from './category-list/category-list.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TaskContainerComponent } from './task-container/task-container.component';
import { TaskListComponent } from './task-list/task-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { ToDoComponent } from './to-do/to-do.component';
import { CommonModule } from '../common/common.module';
import { StrikeThroughDirective } from './strike-through.directive';

@NgModule({
    declarations: [
        CategoryListComponent,
        SideNavComponent,
        TaskContainerComponent,
        TaskListComponent,
        TaskDetailComponent,
        ToDoComponent,
        StrikeThroughDirective,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        CommonModule,
    ],
    exports: [
        CategoryListComponent,
        SideNavComponent,
        TaskContainerComponent,
        TaskListComponent,
        TaskDetailComponent,
        StrikeThroughDirective,
    ],
})
export class ToDoModule {}
