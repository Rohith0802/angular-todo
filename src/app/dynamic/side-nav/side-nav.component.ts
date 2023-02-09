import { Component, EventEmitter } from '@angular/core';
import { ToDoService } from 'src/app/to-do.service';
import { Category } from 'src/app/Category';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
    newCategory!: Category;
    selectedCategory!: Category;
    constructor(private todoService: ToDoService) {}

    addCategory(event: Event) {
        var categoryName: string = (event.target as HTMLInputElement).value;
        var category: Category = {
            id: 0,
            name: categoryName,
            iconClass: 'fa fa-tasks',
            count: 0,
        };
        (event.target as HTMLInputElement).value = '';
        this.todoService.saveCategory(category).subscribe(() => {
            this.newCategory = category;
            this.selectedCategory = category;
        });
    }

    getSelectedCategory(category: Category) {
        this.selectedCategory = category;
    }
}
