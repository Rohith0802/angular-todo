import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './Category';

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

  saveCategory(category: Category) {
    return this.http.post<number>(`${this.httpUrl}/category`, category, {
      headers: this.httpHeader,
    });
  }
}
