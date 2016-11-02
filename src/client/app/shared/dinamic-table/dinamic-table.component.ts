import { Component, Input, OnInit } from '@angular/core';

// Model
import { Work } from '../../model/worker/work';

import { Button1Component } from '../button1/button1.component';
import { ActionPlantsComponent } from '../actionPlants/action-plants.component';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'dinamic',
  templateUrl: 'dinamic-table.component.html',
  styleUrls: ['dinamic-table.component.css'],
  entryComponents: [Button1Component, ActionPlantsComponent]
})

export class DinamicTableComponent implements OnInit {
  @Input() title: number;
  @Input() workers: Work[];
  @Input() headers: string[];
  @Input() component:boolean = false;
  @Input() actionPlants:boolean = false;
  
  countColum: number;
  columnas: number;
  textButton: string = "Assign";
  textButtonPlant: string = "Edit";
  // component: Button1Component = new Button1Component;
  
  constructor() {
  }

  ngOnInit() {
  
  }
  workerDetail(){
    debugger;
  }
  ejemploClick(){
  var asdas = "asdasds";
  debugger;
}
}