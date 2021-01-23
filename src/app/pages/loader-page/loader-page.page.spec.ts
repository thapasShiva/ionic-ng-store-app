import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoaderPagePage } from './loader-page.page';

describe('LoaderPagePage', () => {
  let component: LoaderPagePage;
  let fixture: ComponentFixture<LoaderPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoaderPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoaderPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
