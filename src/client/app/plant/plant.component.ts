import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/index';
import { DinamicTableComponent } from '../shared/dinamic-table/dinamic-table.component';

// Model
import { Plant } from '../model/plant/plant';

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
      "name": "carlos@dreamsit.cl",
      "customerId": "11",
      "logo": "cifuentes",
      "customer": "carlos",
      "geyserUsers": "asdasda",
      "equipments": "asdasd",
      "productionLines": "santiago",
      "areas": "santiago",
      "maintenanceEvents": "santiago"
    },
    {
      "plantId": "1",
      "name": "carlos@dreamsit.cl",
      "customerId": "11",
      "logo": "cifuentes",
      "customer": "carlos",
      "geyserUsers": "asdasda",
      "equipments": "asdasd",
      "productionLines": "santiago",
      "areas": "santiago",
      "maintenanceEvents": "santiago"
    },
    {
      "plantId": "1",
      "name": "carlos@dreamsit.cl",
      "customerId": "11",
      "logo": "cifuentes",
      "customer": "carlos",
      "geyserUsers": "asdasda",
      "equipments": "asdasd",
      "productionLines": "santiago",
      "areas": "santiago",
      "maintenanceEvents": "santiago"
    },
    {
      "plantId": "1",
      "name": "carlos@dreamsit.cl",
      "customerId": "11",
      "logo": "cifuentes",
      "customer": "carlos",
      "geyserUsers": "asdasda",
      "equipments": "asdasd",
      "productionLines": "santiago",
      "areas": "santiago",
      "maintenanceEvents": "santiago"
    },
    {
      "plantId": "1",
      "name": "carlos@dreamsit.cl",
      "customerId": "11",
      "logo": "cifuentes",
      "customer": "carlos",
      "geyserUsers": "asdasda",
      "equipments": "asdasd",
      "productionLines": "santiago",
      "areas": "santiago",
      "maintenanceEvents": "santiago"
    },
    {
      "plantId": "1",
      "name": "carlos@dreamsit.cl",
      "customerId": "11",
      "logo": "cifuentes",
      "customer": "carlos",
      "geyserUsers": "asdasda",
      "equipments": "asdasd",
      "productionLines": "santiago",
      "areas": "santiago",
      "maintenanceEvents": "santiago"
    },
  ]

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor() {
    this.headers = Object.keys(this.listPlants[0]);
   }

  /**
   * Get the names OnInit
   */
  ngOnInit() {
  }
}
