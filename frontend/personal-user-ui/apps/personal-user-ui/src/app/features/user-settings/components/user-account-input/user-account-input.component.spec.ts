import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountInputComponent } from './user-account-input.component';

describe('UserAccountInputComponent', () => {
  let component: UserAccountInputComponent;
  let fixture: ComponentFixture<UserAccountInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserAccountInputComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserAccountInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
