import { Component } from '@angular/core';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
    tasks: Array<{
        categoryIds: Array<number>;
        id: number;
        name: string;
        note: string;
        isImportant: boolean;
        isCompleted: boolean;
    }> = [
        // {
        //   id: 1,
        //   name: 'My Day',
        //   note: 'hello',
        //   isImportant: false,
        //   isCompleted: true,
        //   categoryIds: [],
        // },
        // {
        //   id: 2,
        //   name: 'Important',
        //   note: 'hello',
        //   isImportant: true,
        //   isCompleted: true,
        //   categoryIds: [],
        // },
        // {
        //   id: 3,
        //   name: 'Planned',
        //   note: 'hello',
        //   isImportant: true,
        //   isCompleted: false,
        //   categoryIds: [],
        // },
        // {
        //   id: 4,
        //   name: 'Assigned to me',
        //   note: 'hello',
        //   isImportant: false,
        //   isCompleted: false,
        //   categoryIds: [],
        // },
        // {
        //   id: 5,
        //   name: 'Tasks',
        //   note: 'hello',
        //   isImportant: true,
        //   isCompleted: false,
        //   categoryIds: [],
        // },
    ];
}
