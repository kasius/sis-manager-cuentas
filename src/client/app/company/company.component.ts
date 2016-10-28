import { Component, OnInit } from '@angular/core';
import { DinamicTableComponent } from '../shared/dinamic-table/dinamic-table.component';

// Model
import { Company } from '../model/company/company';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'company',
  templateUrl: 'company.component.html',
  styleUrls: ['company.component.css'],
  entryComponents: [DinamicTableComponent]
})
export class CompanyComponent implements OnInit {
  
  title: string = "Details Company";
  headers: any[] = [];
  listCompany: Company[] = [
    {
      "companyId": "1",
      "name": "carlos@dreamsit.cl",
      "logo": "11",
      "geyserUsers": "cifuentes",
      "equipments": "carlos",
      "plants": "asasdad",
      "maintenanceEvents": "asdsad"
    },
    {
      "companyId": "1",
      "name": "carlos@dreamsit.cl",
      "logo": "11",
      "geyserUsers": "cifuentes",
      "equipments": "carlos",
      "plants": "asasdad",
      "maintenanceEvents": "asdsad"
    },
    {
      "companyId": "1",
      "name": "carlos@dreamsit.cl",
      "logo": "11",
      "geyserUsers": "cifuentes",
      "equipments": "carlos",
      "plants": "asasdad",
      "maintenanceEvents": "asdsad"
    },
    {
      "companyId": "1",
      "name": "carlos@dreamsit.cl",
      "logo": "11",
      "geyserUsers": "cifuentes",
      "equipments": "carlos",
      "plants": "asasdad",
      "maintenanceEvents": "asdsad"
    }
  ]
  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor() { 
    this.headers = Object.keys(this.listCompany[0]);
  }
  /**
   * Get the names OnInit
   */
  ngOnInit() {
  }

}
