import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { UserAccount } from 'apps/personal-user-ui/src/app/features/user-settings/types/user-account';
import { UserAccountType } from 'apps/personal-user-ui/src/app/features/user-settings/types/user-account-type';

@Component({
  selector: 'enimco-user-account-input',
  templateUrl: './user-account-input.component.html',
  styleUrls: ['./user-account-input.component.scss'],
})
export class UserAccountInputComponent implements OnInit, ControlValueAccessor {
  public userAccount: UserAccount;
  public accountTypes: any[] = Object.values(UserAccountType).filter(
    (value) => typeof value !== 'number'
  );

  @Input()
  public account!: UserAccount;

  public selectedType?: string;

  public propagateChange = (_: any) => {
    return;
  };

  constructor() {
    this.userAccount = new UserAccount();
  }

  writeValue(obj: any): void {
    if (obj !== undefined) {
      this.userAccount = obj;
    }
  }
  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    return;
  }

  ngOnInit(): void {
    return;
  }
}
