import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToDoService } from 'src/app/to-do.service';
import { Category } from 'src/app/Category';

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent {
    @Input() newCategory!: Category;
    @Output() currentCategory = new EventEmitter<Category>();

    selectedCategory!: Category;
    categories: Category[] = [];

    constructor(private toDoService: ToDoService) {}

    ngOnChanges(): void {
        this.renderCategory();
    }

    renderCategory(): void {
        this.toDoService.getCategories().subscribe((categories) => {
            this.categories = categories;

            if (this.selectedCategory === undefined) {
                this.selectedCategory = categories[0];
                this.currentCategory.emit(categories[0]);
            }
        });
    }

    selectCategory(category: Category) {
        this.selectedCategory = category;
        this.currentCategory.emit(category);
    }
}
