import { Component } from '@angular/core';
import { Task } from 'src/app/Task';
import { InteractionServiceService } from 'src/app/interaction-service.service';
import { ToDoService } from 'src/app/to-do.service';

@Component({
    selector: 'app-task-detail',
    templateUrl: './task-detail.component.html',
    styleUrls: ['./task-detail.component.scss'],
})
export class TaskDetailComponent {
    isVisible!: boolean;
    selectedTask!: Task;
    taskNote!: string;
    taskName!: string;

    constructor(
        private toDoService: ToDoService,
        private serivce: InteractionServiceService
    ) {}

    ngOnInit() {
        this.serivce.taskDetailStatus.subscribe((status) => {
            this.isVisible = status;
        });

        this.serivce.currentTask.subscribe((task) => {
            if (task !== undefined) {
                this.selectedTask = task;
                this.taskName = this.selectedTask.name;
                this.taskNote = this.selectedTask.note;
            }
        });
    }

    closeTaskDetails() {
        this.serivce.toggleTaskDetails(false);
    }

    updateCompleteStatus() {
        this.selectedTask.isCompleted = !this.selectedTask.isCompleted;

        this.serivce.updateTask(this.selectedTask);
    }

    updateImportantStatus() {
        if (this.selectedTask.isImportant === true) {
            this.selectedTask.categoryIds.splice(
                this.selectedTask.categoryIds.indexOf(2),
                1
            );
            this.selectedTask.isImportant = false;
        } else {
            this.selectedTask.categoryIds.push(2);
            this.selectedTask.isImportant = true;
        }
        this.serivce.updateTask(this.selectedTask);
    }

    updateTaskNote() {
        this.selectedTask.note = this.taskNote;

        this.toDoService
            .saveOrUpdateTask(this.selectedTask)
            .subscribe((task) => {
                this.serivce.selectTask(task);
            });
    }

    updateTaskName() {
        if (this.selectedTask.name !== this.taskName && this.taskName !== '') {
            this.selectedTask.name = this.taskName;

            this.serivce.updateTask(this.selectedTask);
        }
    }
}
