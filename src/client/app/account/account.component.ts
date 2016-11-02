import { Component, OnInit } from '@angular/core';
import { DinamicTableComponent } from '../shared/dinamic-table/dinamic-table.component';
import { Router } from '@angular/router';

// Model
import { Account } from '../model/account/account';
import { Work } from '../model/worker/work';

// Services
import { AccountService } from '../Services/account.services';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'account',
  templateUrl: 'account.component.html',
  styleUrls: ['account.component.css']
})
export class AccountComponent implements OnInit {

    worker = {
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    lastName: "",
    rr: false,
    ohsas: false,
    geyser: false
  };
  workers: Work[];
  
  constructor(private _route: Router, private accountService: AccountService) { 
  }

  ngOnInit() {
  }

  newHero(data:any) {
    if (data.rr == true) {
      this.accountService.registerRelayRace(data).subscribe(
        // response => this.response = response, 
        error => console.error('Error: '),
        () => this._route.navigate(['/workGeyser'])
      );
    }
    if (data.geyser == true) {
      this.accountService.registerGeyser(data).subscribe(
        // response => this.response = response, 
        error => console.error('Error RR: '),
        () => this._route.navigate(['/workGeyser'])
      );
    }
    if (data.ohsas == true) {
      this.accountService.registerOhsas(data).subscribe(
        // response => this.response = response, 
        error => console.error('Error RR: '),
        () => this._route.navigate(['/workGeyser'])
      );
    }
  }

}
