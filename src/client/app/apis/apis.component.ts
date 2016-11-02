import { Component, OnInit } from '@angular/core';

//Resource
import { Apis } from '../Services/api.services';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'apis',
  templateUrl: 'apis.component.html',
  styleUrls: ['apis.component.css'],
})

export class ApisComponent implements OnInit {

  apiResource: Apis;

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(private _apiResource: Apis) {
    this.apiResource =  _apiResource;
   }

  /**
   * Get the names OnInit
   */
  ngOnInit() {
  }
  changesApis(form:any){
    this.apiResource.changeApis(form);
    // this.apiResource.apiGeyser = form.apiGeyser;
    // this.apiResource.apiRelayRace = form.apiRelayRace;
    // this.apiResource.apiOhsas = form.apiOhsas;
  }
}
