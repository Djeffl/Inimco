import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'user-settings',
  },
  {
    path: 'user-settings',
    loadChildren: () =>
      import('./features/user-settings/user-settings-routing.module').then(
        (m) => m.UserSettingsRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
