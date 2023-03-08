import { NgModule } from '@angular/core';
import { CommonModule } from './common/common.module';

import { AppComponent } from './app.component';
import { ToDoModule } from './to-do/to-do.module';
import { AppRoutingModule } from './app-routing.module';
import { SettingModule } from './setting/setting.module';
import { LoaderComponent } from './loader/loader.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './loader.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {
    // NgxUiLoaderHttpModule,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule,
} from 'ngx-ui-loader';

@NgModule({
    declarations: [AppComponent, LoaderComponent, LoginComponent],
    imports: [
        CommonModule,
        ToDoModule,
        AppRoutingModule,
        SettingModule,
        BrowserModule,
        FormsModule,
        NgxUiLoaderModule,
        NgxUiLoaderRouterModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoaderInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
