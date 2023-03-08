import { Component, Input } from '@angular/core';
import { Category } from 'src/app/Category';
import { Task } from 'src/app/Task';
import { InteractionServiceService } from 'src/app/interaction-service.service';
import { ToDoService } from 'src/app/to-do.service';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent {
    @Input() tasks: Task[] = [];
    selectedTask!: Task;
    taskContainerStyle: any;
    isCompletedTaskHidden = true;
    selectedCategoryId!: number;
    completedTasks: Task[] = [];
    inCompletedTasks: Task[] = [];

    constructor(
        private toDoService: ToDoService,
        private service: InteractionServiceService
    ) {}

    ngOnInit() {
        this.service.currentCategory.subscribe((category) => {
            this.selectedCategoryId = category !== undefined ? category.id : 0;
        });

        this.service.updatedTask.subscribe((task) => {
            if (task !== undefined) {
                this.updateTasks(task);
            }
        });
    }

    ngOnChanges() {
        this.splitTask();
    }

    splitTask() {
        if (this.tasks !== undefined) {
            this.completedTasks = [];
            this.inCompletedTasks = [];

            for (let task of this.tasks) {
                if (task.isCompleted === true) {
                    this.completedTasks.push(task);
                } else {
                    this.inCompletedTasks.push(task);
                }
            }
        }
    }

    toggleCompletedHiddenStatus() {
        this.isCompletedTaskHidden = !this.isCompletedTaskHidden;
    }

    updateTasks(task: Task) {
        this.toDoService.saveOrUpdateTask(task).subscribe((updatedTask) => {
            this.toDoService
                .getTaskByCategoryId(this.selectedCategoryId)
                .subscribe((tasks) => {
                    this.tasks = tasks;
                    this.splitTask();
                });
            if (this.selectedTask.id === updatedTask.id) {
                this.service.selectTask(updatedTask);
            }
        });
    }

    toggleCompletedStatus(task: Task) {
        task.isCompleted = !task.isCompleted;
        this.updateTasks(task);
    }

    toggleImportantStatus(task: Task) {
        if (task.isImportant === true) {
            task.categoryIds.splice(task.categoryIds.indexOf(2), 1);
            task.isImportant = false;
        } else {
            task.categoryIds.push(2);
            task.isImportant = true;
        }
        this.updateTasks(task);
    }

    displayTaskDetails(task: Task) {
        this.selectedTask = task;
        this.service.selectTask(task);
        this.service.toggleTaskDetails(true);
    }
}
