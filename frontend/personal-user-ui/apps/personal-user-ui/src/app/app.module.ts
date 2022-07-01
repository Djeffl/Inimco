import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'apps/personal-user-ui/src/app/app-routing.module';
import { SharedModule } from 'apps/personal-user-ui/src/app/shared/shared.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserSettingsModule } from 'apps/personal-user-ui/src/app/features/user-settings/user-settings.module';
import { AppInitializer } from 'apps/personal-user-ui/src/app/app.initializer';
import { AppConfigService } from 'apps/personal-user-ui/src/app/app-config.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpHandlerInterceptor } from 'apps/personal-user-ui/src/app/core/interceptors/http-handler-interceptor';

export function initializeApp(appInit: AppInitializer): () => Promise<void> {
  return () => appInit.initialize();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    UserSettingsModule,
  ],
  providers: [
    AppConfigService,
    AppInitializer,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppInitializer],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHandlerInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
