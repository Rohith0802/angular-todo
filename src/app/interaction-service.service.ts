import { Injectable } from '@angular/core';
import { Category } from './Category';
import { BehaviorSubject } from 'rxjs';
import { Task } from './Task';

@Injectable({
    providedIn: 'root',
})
export class InteractionServiceService {
    selectedCategory!: Category;
    selectedTask!: Task;

    constructor() {}

    private category = new BehaviorSubject<Category>(this.selectedCategory);
    currentCategory = this.category.asObservable();

    selectCategory(chosenCategory: Category) {
        if (chosenCategory !== undefined) {
            this.category.next(chosenCategory);
        }
    }

    private task = new BehaviorSubject<Task>(this.selectedTask);
    currentTask = this.task.asObservable();

    selectTask(chosenTask: Task) {
        this.task.next(chosenTask);
    }

    private sideNav = new BehaviorSubject<boolean>(true);
    sideNavStatus = this.sideNav.asObservable();

    toggleSideNav(status: boolean) {
        this.sideNav.next(status);
    }

    private taskDetailsContainer = new BehaviorSubject<boolean>(false);
    taskDetailStatus = this.taskDetailsContainer.asObservable();

    toggleTaskDetails(status: boolean) {
        this.taskDetailsContainer.next(status);
    }

    private update = new BehaviorSubject<Task>(this.selectedTask);
    updatedTask = this.update.asObservable();

    updateTask(task: Task) {
        this.update.next(task);
    }
}
