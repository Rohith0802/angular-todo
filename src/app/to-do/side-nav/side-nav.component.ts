import { Component } from '@angular/core';
import { ToDoService } from 'src/app/to-do.service';
import { Category } from 'src/app/Category';
import { InteractionServiceService } from 'src/app/interaction-service.service';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {
    isSideNavVisible!: boolean;
    selectedCategory!: Category;
    newCategoryName!: string;
    categories!: Category[];

    constructor(
        private todoService: ToDoService,
        private service: InteractionServiceService
    ) {}

    addCategory() {
        if (this.newCategoryName) {
            var category: Category = {
                id: 0,
                name: this.newCategoryName,
                iconClass: 'fa fa-tasks',
                count: 0,
            };
            this.newCategoryName = '';
            this.todoService
                .saveOrUpdateCategory(category)
                .subscribe((updatedCategory) => {
                    this.service.selectCategory(updatedCategory);
                    this.getCategories();
                });
        }
    }

    ngOnInit() {
        this.getSelectedCategory();
        this.getCategories();
        this.updateSideNaveStatus();
    }

    updateSideNaveStatus() {
        this.service.sideNavStatus.subscribe((status) => {
            this.isSideNavVisible = status;
        });
    }

    getSelectedCategory() {
        this.service.currentCategory.subscribe((category) => {
            console.log('working');
            console.log(category);

            this.selectedCategory = category;
        });
    }

    getCategories() {
        this.todoService.getCategories().subscribe((categories) => {
            this.categories = categories;

            if (this.selectedCategory === undefined) {
                this.service.selectCategory(this.categories[0]);
            }
        });
    }

    closeSideNav() {
        this.service.toggleSideNav(false);
    }
}
