import { Component, Input, OnInit } from '@angular/core';

// Model
import { Work } from '../../model/worker/work';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'dinamic',
  templateUrl: 'dinamic-table.component.html',
  styleUrls: ['dinamic-table.component.css'],
})

export class DinamicTableComponent implements OnInit {
  @Input() title: number;
  @Input() workers: Work[];
  @Input() headers: string[];
  countColum: number;
  columnas: number;

  constructor() {
    
  }

  ngOnInit() {
  
  }
}