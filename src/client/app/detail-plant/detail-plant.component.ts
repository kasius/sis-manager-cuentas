import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

// import {AccountService} from '../services/account.services';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'detail-plant',
  templateUrl: 'detail-plant.component.html',
  styleUrls: ['detail-plant.component.css']
})
export class DetailPlantComponent implements OnInit {
  private id: string;
  private sub: any;

  constructor(private route: ActivatedRoute) { 
  }
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
}