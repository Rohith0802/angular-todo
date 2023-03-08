import { Component, Input } from '@angular/core';
import { Category } from 'src/app/Category';
import { InteractionServiceService } from 'src/app/interaction-service.service';

@Component({
    selector: 'app-category-list',
    templateUrl: './category-list.component.html',
    styleUrls: ['./category-list.component.scss'],
})
export class CategoryListComponent {
    @Input() categories: Category[] = [];
    selectedCategory!: Category;

    constructor(private service: InteractionServiceService) {}

    selectCategory(category: Category) {
        if (this.selectedCategory !== category) {
            this.service.selectCategory(category);
            this.service.toggleTaskDetails(false);
        }
    }

    ngOnInit() {
        this.service.currentCategory.subscribe((category) => {
            this.selectedCategory = category;
        });
    }
}
