import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LoaderService {
    constructor() {}

    private loader = new BehaviorSubject<boolean>(false);
    isLoading = this.loader.asObservable();

    startLoading() {
        this.loader.next(true);
    }

    stopLoading() {
        this.loader.next(false);
    }
}
