import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewallCategoriesPagePage } from './viewall-categories-page.page';

describe('ViewallCategoriesPagePage', () => {
  let component: ViewallCategoriesPagePage;
  let fixture: ComponentFixture<ViewallCategoriesPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallCategoriesPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewallCategoriesPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
