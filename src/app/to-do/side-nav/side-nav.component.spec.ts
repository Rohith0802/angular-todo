import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavComponent } from './side-nav.component';
import { ToDoService } from 'src/app/to-do.service';
import { InteractionServiceService } from 'src/app/interaction-service.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { of } from 'rxjs';
import { Category } from 'src/app/Category';

fdescribe('SideNavComponent', () => {
    let mockToDoService = jasmine.createSpyObj([
        'getCategories',
        'saveOrUpdateCategory',
    ]);
    let component: SideNavComponent;
    let service: InteractionServiceService;
    let categories = [
        {
            id: 1,
            name: 'newCategory',
            iconClass: 'fa fa-tasks',
            count: 0,
        },
        {
            id: 2,
            name: 'newCategory',
            iconClass: 'fa fa-tasks',
            count: 0,
        },
    ];
    let categoryName: string = 'This is new Category';
    let category: Category = {
        id: 1,
        name: categoryName,
        iconClass: 'fa fa-tasks',
        count: 0,
    };
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SideNavComponent],
            providers: [
                { provide: ToDoService, useValue: mockToDoService },
                InteractionServiceService,
                HttpClient,
                HttpHandler,
            ],
        }).compileComponents();
        service = new InteractionServiceService();
        const fixture = TestBed.createComponent(SideNavComponent);
        component = fixture.componentInstance;
        mockToDoService.getCategories.and.returnValue(of(categories));
        mockToDoService.saveOrUpdateCategory.and.returnValue(of(category));
        // component.ngOnInit();
    });

    it('should get categories and update categories', () => {
        component.getCategories();
        expect(component.categories).toEqual(categories);
    });

    it('should get selected category', () => {
        component.getSelectedCategory();

        service.currentCategory.subscribe((category) => {
            expect(component.selectedCategory).toEqual(category);
        });
    });

    it('Should update sideNav status', () => {
        component.updateSideNaveStatus();

        service.sideNavStatus.subscribe((status) => {
            expect(component.isSideNavVisible).toEqual(status);
        });
    });

    it('should add new Category and make it as selectedCategory', () => {
        component.newCategoryName = categoryName;
        let selectCategorySpy = spyOn(service, 'selectCategory');

        component.addCategory();
        expect(selectCategorySpy).toHaveBeenCalled();
    });
});
