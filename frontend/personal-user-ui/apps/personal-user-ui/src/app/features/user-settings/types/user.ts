import { UserAccount } from 'apps/personal-user-ui/src/app/features/user-settings/types/user-account';

export class User {
  public constructor(
    firstName: string,
    lastName: string,
    socialSkills: string[],
    accounts: UserAccount[]
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.socialSkills = socialSkills;
    this.accounts = accounts;
  }

  public firstName: string;
  public lastName: string;
  public socialSkills: string[];
  public accounts: UserAccount[];

  public get numberOfVowels(): number {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let count = 0;

    for (const letter of this.fullName.toLowerCase()) {
      if (vowels.includes(letter)) {
        count++;
      }
    }

    return count;
  }

  public get numberOfConstenants(): number {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let count = 0;

    for (const letter of this.fullName.toLowerCase()) {
      if (!vowels.includes(letter) && letter !== ' ') {
        count++;
      }
    }

    return count;
  }

  public get fullName(): string {
    return `${this.firstName.trim()} ${this.lastName.trim()}`;
  }
}
