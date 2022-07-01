import { Injectable } from '@angular/core';
import { AppConfigService } from 'apps/personal-user-ui/src/app/app-config.service';

@Injectable()
export class AppInitializer {
  constructor(private appConfigService: AppConfigService) {}

  public async initialize(): Promise<void> {
    // Load the application configuration
    await this.appConfigService.loadConfiguration();
  }
}
