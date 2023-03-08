import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-to-do',
    templateUrl: './to-do.component.html',
    styleUrls: ['./to-do.component.scss'],
})
export class ToDoComponent {
    constructor(private title: Title, private route: ActivatedRoute) {
        this.title.setTitle(this.route.snapshot.data['title']);
    }
}
