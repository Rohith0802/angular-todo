import { Component, Input } from '@angular/core';
import { Category } from 'src/app/Category';

@Component({
    selector: 'app-task-container',
    templateUrl: './task-container.component.html',
    styleUrls: ['./task-container.component.scss'],
})
export class TaskContainerComponent {
    @Input() selectedCategory!: Category;
    name!: String;
    iconClass!: String;

    ngOnChanges() {
        if (this.selectedCategory !== undefined) {
            this.name = this.selectedCategory.name;
            this.iconClass = this.selectedCategory.iconClass;
        }
    }
}
