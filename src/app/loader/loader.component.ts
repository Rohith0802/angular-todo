import { Component } from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
    isLoading!: boolean;

    constructor(private loaderService: LoaderService) {}

    ngOnInit() {
        this.loaderService.isLoading.subscribe((isLoading) => {
            this.isLoading = isLoading;
        });
    }
}
