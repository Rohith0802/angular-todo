import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
    constructor(private title: Title, private route: ActivatedRoute) {
        this.title.setTitle(this.route.snapshot.data['title']);
    }
}
