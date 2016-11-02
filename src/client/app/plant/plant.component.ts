import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/index';
import { DinamicTableComponent } from '../shared/dinamic-table/dinamic-table.component';

// Model
import { Plant } from '../model/plant/plant';

//Resource
// import { TokenAccess } from '../Services/tokenAccess.resource';
/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'plant.component.html',
  styleUrls: ['plant.component.css'],
  entryComponents: [DinamicTableComponent]
})

export class PlantComponent implements OnInit {

  newName: string = '';
  errorMessage: string;
  names: any[] = [];

  title: string = "Details Plants";
  headers: any[] = [];
  listPlants: Plant[] = [
    {
      "plantId": "1",
      "name": "Horcones",
      "customerId": "11",
      "logo": "jpg",
      "customer": "Arauco",
      "geyserUsers": "1500",
      "equipments": "670",
      "productionLines": "5",
      "areas": "20",
      "maintenanceEvents": "5"
    },
    {
      "plantId": "2",
      "name": "Nueva Aldea",
      "customerId": "11",
      "logo": "jpg",
      "customer": "Arauco",
      "geyserUsers": "2300",
      "equipments": "890",
      "productionLines": "4",
      "areas": "43",
      "maintenanceEvents": "7"
    },
    {
      "plantId": "3",
      "name": "Santa Fe",
      "customerId": "11",
      "logo": "jpg",
      "customer": "CMPC",
      "geyserUsers": "1500",
      "equipments": "670",
      "productionLines": "5",
      "areas": "5",
      "maintenanceEvents": "5"
    },
    {
      "plantId": "4",
      "name": "Horcones",
      "customerId": "11",
      "logo": "jpg",
      "customer": "Arauco",
      "geyserUsers": "1500",
      "equipments": "670",
      "productionLines": "5",
      "areas": "5",
      "maintenanceEvents": "5"
    },
    {
      "plantId": "5",
      "name": "Horcones",
      "customerId": "11",
      "logo": "jpg",
      "customer": "Arauco",
      "geyserUsers": "1500",
      "equipments": "670",
      "productionLines": "5",
      "areas": "5",
      "maintenanceEvents": "5"
    },
    {
      "plantId": "6",
      "name": "Horcones",
      "customerId": "11",
      "logo": "jpg",
      "customer": "Arauco",
      "geyserUsers": "1500",
      "equipments": "670",
      "productionLines": "5",
      "areas": "5",
      "maintenanceEvents": "5"
    },
  ]
// tokenResource: TokenAccess;

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  //  private _tokenResource: TokenAccess
  constructor() {
    this.headers = Object.keys(this.listPlants[0]);
    // this.tokenResource =  _tokenResource;
   }

  /**
   * Get the names OnInit
   */
  ngOnInit() {
  }
}
