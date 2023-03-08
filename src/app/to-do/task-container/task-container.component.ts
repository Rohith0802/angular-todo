import { Component, Input } from '@angular/core';
import { Category } from 'src/app/Category';
import { Task } from 'src/app/Task';
import { InteractionServiceService } from 'src/app/interaction-service.service';
import { ToDoService } from 'src/app/to-do.service';

@Component({
    selector: 'app-task-container',
    templateUrl: './task-container.component.html',
    styleUrls: ['./task-container.component.scss'],
})
export class TaskContainerComponent {
    selectedCategory!: Category;
    isSideNavVisible!: boolean;
    isTaskDetailsVisible!: boolean;
    tasks!: Task[];
    taskName!: string;
    name!: string;
    iconClass!: string;

    taskContainerStyle = {};

    constructor(
        private toDoService: ToDoService,
        private service: InteractionServiceService
    ) {}

    ngOnInit() {
        this.service.currentCategory.subscribe((category) => {
            this.selectedCategory = category;

            if (this.selectedCategory !== undefined) {
                this.name = this.selectedCategory.name;
                this.iconClass = this.selectedCategory.iconClass;
                this.renderTask();
            }
        });

        this.service.sideNavStatus.subscribe((status) => {
            this.isSideNavVisible = status;
            this.setTaskContainerStyle();
        });

        this.service.taskDetailStatus.subscribe((status) => {
            this.isTaskDetailsVisible = status;
            this.setTaskContainerStyle();
        });
    }

    addTask() {
        if (this.taskName) {
            var categoryIds: number[] = [];
            var task: Task = {
                id: 0,
                name: this.taskName,
                categoryIds: [],
                note: '',
                isImportant: false,
                isCompleted: false,
            };

            if (this.selectedCategory.id === 2) {
                categoryIds.push(2);
                task.isImportant = true;
            } else {
                categoryIds.push(this.selectedCategory.id);
            }

            if (this.selectedCategory.id < 4) {
                categoryIds.push(5);
            }
            task.categoryIds = categoryIds;
            this.taskName = '';
            this.toDoService.saveOrUpdateTask(task).subscribe(() => {
                this.selectedCategory.count++;
                this.renderTask();
            });
        }
    }

    renderTask() {
        this.toDoService
            .getTaskByCategoryId(this.selectedCategory.id)
            .subscribe((categorysTasks: Task[]) => {
                this.tasks = categorysTasks;
            });
    }

    displaySideBar() {
        this.service.toggleSideNav(true);
    }

    setTaskContainerStyle() {
        this.taskContainerStyle = {
            'middle-container-with-left':
                this.isSideNavVisible === true &&
                this.isTaskDetailsVisible === false
                    ? true
                    : false,
            'middle-with-left-and-right-container':
                this.isSideNavVisible === true &&
                this.isTaskDetailsVisible === true
                    ? true
                    : false,
            'middle-container-with-right':
                this.isSideNavVisible === false &&
                this.isTaskDetailsVisible === true
                    ? true
                    : false,
            'middle-container':
                this.isSideNavVisible === false &&
                this.isTaskDetailsVisible === false
                    ? true
                    : false,
        };
    }
}
