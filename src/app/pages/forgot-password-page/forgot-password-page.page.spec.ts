import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ForgotPasswordPagePage } from './forgot-password-page.page';

describe('ForgotPasswordPagePage', () => {
  let component: ForgotPasswordPagePage;
  let fixture: ComponentFixture<ForgotPasswordPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForgotPasswordPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
