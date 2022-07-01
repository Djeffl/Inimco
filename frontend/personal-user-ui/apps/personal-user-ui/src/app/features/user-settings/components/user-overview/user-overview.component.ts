import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { Form, FormArray, FormControl, FormGroup } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormBuilder } from '@angular/forms';
import { User } from 'apps/personal-user-ui/src/app/features/user-settings/types/user';
import { UserAccountType } from 'apps/personal-user-ui/src/app/features/user-settings/types/user-account-type';
import { UserSettingsService } from 'apps/personal-user-ui/src/app/features/user-settings/services/user-settings.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'personal-user-ui-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss'],
})
export class UserOverviewComponent implements OnInit, OnDestroy {
  separatorKeysCodes: number[] = [ENTER, COMMA];
  socialSkillSuggestions: string[] = ['Social', 'Team player'];

  subscription = new Subscription();

  public accountTypes: any[] = Object.values(UserAccountType).filter(
    (value) => typeof value !== 'number'
  );

  @ViewChild('socialSkillInput')
  socialSkillInput!: ElementRef<HTMLInputElement>;
  userForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userSettingsService: UserSettingsService
  ) {
    const accountForm = this.formBuilder.group({
      type: '',
      address: '',
    });

    this.userForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      socialSkills: this.formBuilder.array([]),
      accounts: this.formBuilder.array([accountForm]),
    });
  }

  ngOnInit(): void {
    return;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  get accounts(): FormArray {
    return this.userForm.controls['accounts'] as FormArray;
  }

  get socialSkillsCtrl(): FormArray {
    return this.userForm.controls['socialSkills'] as FormArray;
  }

  addNewSocialSkill(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.socialSkillsCtrl.push(this.formBuilder.control(value));
    }

    // Clear the input value
    event.chipInput.clear();
  }

  remove(socialSkill: string): void {
    const index = this.socialSkillsCtrl.value.indexOf(socialSkill);

    if (index >= 0) {
      this.socialSkillsCtrl.removeAt(index);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.socialSkillsCtrl.push(
      this.formBuilder.control(event.option.viewValue)
    );
    this.socialSkillInput.nativeElement.value = '';
  }

  addNewAccount(event: any): void {
    this.accounts.push(
      this.formBuilder.group({
        type: '',
        address: '',
      })
    );
  }

  public submitUser(event: any): void {
    const userValues = this.userForm.value;

    const user = new User(
      userValues.firstName,
      userValues.lastName,
      userValues.socialSkills,
      userValues.accounts
    );

    console.log(`The number of VOWELS: ${user.numberOfVowels}`);
    console.log(`The number of CONSTENANTS: ${user.numberOfConstenants}`);
    console.log(`The first name + last name entered: ${user.fullName}`);
    console.log(
      `The reverse version of the firstname and lastname: ${this.reverseString(
        user.fullName
      )}`
    );

    this.subscription.add(
      this.userSettingsService
        .createUserSettings(user)
        .subscribe((response) => {
          console.log('The JSON format of the entire object:', response);
        })
    );
  }

  private reverseString(value: string): string {
    return value.split('').reverse().join('');
  }
}
