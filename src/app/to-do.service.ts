import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './Category';
import { Task } from './Task';

@Injectable({
    providedIn: 'root',
})
export class ToDoService {
    httpUrl: string = 'http://localhost:8080/todo';
    httpHeader = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) {}

    getCategories() {
        return this.http.get<Category[]>(`${this.httpUrl}/categories`);
    }

    saveOrUpdateCategory(category: Category) {
        return this.http.post<Category>(`${this.httpUrl}/category`, category, {
            headers: this.httpHeader,
        });
    }

    saveOrUpdateTask(task: Task) {
        return this.http.post<Task>(`${this.httpUrl}/task`, task, {
            headers: this.httpHeader,
        });
    }

    getTaskByCategoryId(categoryId: number) {
        return this.http.get<Task[]>(`${this.httpUrl}/tasks/${categoryId}`);
    }
}
