import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

// import {AccountService} from '../services/account.services';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'detail-worker',
  templateUrl: 'detail-worker.component.html',
  styleUrls: ['detail-worker.component.css']
})
export class DetailWorkerComponent implements OnInit {
  private id: string;
  private sub: any;

  worker = {
    name:"",
    lastName:"",
  };

   modelCuentas = {
      rr: false,
      ohsas: false,
      geyser: false
    };

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  // , private accountService: AccountService
  constructor(private route: ActivatedRoute) { 
  }
  /**
   * Get the names OnInit
   */
  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
        var userId = params['id'];
        debugger;
        // if(userId){
        //     this.workService.getWorker(userId)
        //     .subscribe(
        //         worker => this.worker = worker, 
        //         error => console.error('Error:'),
        //         () => console.log(this.worker)
        //       );
        // }
      });
  }
  asignarAccesoPlataformas(cuentas:modelCuentas){
      debugger;
      console.log("cuentas");
      console.log(cuentas);

    //   if(cuentas.rr == true){
    //     this.accountService.registerRelayRace(this.worker)
    //       .subscribe(
    //           worker => this.worker = worker, 
    //           error => console.error('Error:'),
    //           () => console.log(this.worker)
    //         );
    //   }else if(cuentas.geyser == true){
    //     this.accountService.registerGeyser(this.worker)
    //         .subscribe(
    //             worker => this.worker = worker, 
    //             error => console.error('Error:'),
    //             () => console.log(this.worker)
    //           );
    //   }
    }

}

export class modelCuentas{
    rr:boolean = false;
    ohsas: boolean = false;
    geyser: boolean = false;
}