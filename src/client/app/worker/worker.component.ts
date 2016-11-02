import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/index';
import { DinamicTableComponent } from '../shared/dinamic-table/dinamic-table.component';

// Model
import { Work } from '../model/worker/work';

// Services
import { WorkService } from '../Services/worker.services';

//Resource
import { TokenAccess } from '../Services/token.services';
import { TokenService } from '../Services/token.services';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'worker.component.html',
  styleUrls: ['worker.component.css'],
  entryComponents: [DinamicTableComponent]
})

export class WorkerComponent implements OnInit {

  listWorkers: Work[];
  headers: any[] = [];
  title: string = "Details Workers";
  type:string = "worker";

  tokenService: TokenService;
  tokenResource: TokenAccess;
  headersCustomer = new Array();

  constructor(private _service: WorkService, private _token: TokenService, private _tokenAccess: TokenAccess) {
    this.tokenService =  _token;
    this.tokenResource = _tokenAccess;
  }

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.loadusersGeyser();
  }
  loadusersGeyser(){
    this._service.getUsersGeyser()
      .subscribe(
        listWorkers => {
          // for(let worker of listWorkers){
          //   debugger;
          //   var json = "<a onClick='function(){alert('Hola Mundo');}' >ADD</a>";
          //   worker.action = json;
          // }
          this.listWorkers = listWorkers; 
          // this.headers = Object.keys(this.listWorkers[0]);
          var headers = Object.keys(this.listWorkers[0]);
          for (let item of headers) {
            switch (item)
            {
              case "name" :
                this.headersCustomer.push(item);
                break;
              case "lastName" :
                this.headersCustomer.push(item);
                break;
              case "contact" :
                this.headersCustomer.push(item);
                break;
              case "timeZone" :
                this.headersCustomer.push(item);
                break;
              // case "action" :
              //   this.headersCustomer.push(item);
              //   break;
              // case "charge" :
              //   this.headersCustomer.push(item);
              //   break;
              // case "plants" :
              //   this.headersCustomer.push(item);
              //   break;
            }
          }
          // this.headersCustomer.push("Accion");
          this.headers = this.headersCustomer;
      },
      error => console.error('Error: '),
      () => console.log(this.listWorkers)
      );
  }
ejemploClick(){
  var asdas = "asdasds";
  debugger;
}
}
