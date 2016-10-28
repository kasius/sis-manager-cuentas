import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/index';
import { DinamicTableComponent } from '../shared/dinamic-table/dinamic-table.component';

// Model
import { Work } from '../model/worker/work';
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

  listWorkers: Work[] = [
    {
      "aspNetUserId": "1",
      "contact": "carlos@dreamsit.cl",
      "geyserUserId": "11",
      "lastName": "cifuentes",
      "name": "carlos",
      "role": 3,
      "roleId": 2,
      "timeZone": "santiago"
    },
    {
      "aspNetUserId": "2",
      "contact": "ccifuentes@dreamsit.cl",
      "geyserUserId": "11",
      "lastName": "cifuentes",
      "name": "carlos",
      "role": 3,
      "roleId": 2,
      "timeZone": "santiago"
    },
    {
      "aspNetUserId": "2",
      "contact": "ccifuentes@dreamsit.cl",
      "geyserUserId": "11",
      "lastName": "ulloa",
      "name": "carlos",
      "role": 3,
      "roleId": 2,
      "timeZone": "santiago"
    },
    {
      "aspNetUserId": "2",
      "contact": "ccifuentes@dreamsit.cl",
      "geyserUserId": "11",
      "lastName": "Pedreros",
      "name": "carlos",
      "role": 3,
      "roleId": 2,
      "timeZone": "santiago"
    }

  ]
  headers: any[] = [];
  title: string = "Details Workers";


  constructor() {
    this.headers = Object.keys(this.listWorkers[0]);
  }

  /**
   * Get the names OnInit
   */
  ngOnInit() {
  }

}
