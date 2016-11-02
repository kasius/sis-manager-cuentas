import { Component, OnInit } from '@angular/core';
import { Config } from './shared/index';
import './operators';

import { WorkService } from './Services/worker.services';
import { Apis } from './Services/api.services';
import { TokenService } from './Services/token.services';
import { TokenAccess } from './Services/token.services';
import { AccountService } from './Services/account.services';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  providers:[WorkService, Apis, TokenService, TokenAccess, AccountService]
})

export class AppComponent implements OnInit {
  constructor(private _token: TokenService) {
    console.log('Environment config', Config);
  }

  ngOnInit() {
  }
}
