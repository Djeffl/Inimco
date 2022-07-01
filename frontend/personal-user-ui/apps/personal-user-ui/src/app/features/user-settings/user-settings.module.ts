import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserOverviewComponent } from './components/user-overview/user-overview.component';
import { UserSettingsRoutingModule } from 'apps/personal-user-ui/src/app/features/user-settings/user-settings-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserAccountInputComponent } from './components/user-account-input/user-account-input.component';
import { UserSettingsService } from 'apps/personal-user-ui/src/app/features/user-settings/services/user-settings.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [UserOverviewComponent, UserAccountInputComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserSettingsRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [UserSettingsService],
})
export class UserSettingsModule {}
