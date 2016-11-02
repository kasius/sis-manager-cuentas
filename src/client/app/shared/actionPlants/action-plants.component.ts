import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'action-plants',
  templateUrl: 'action-plants.component.html',
  styleUrls: ['action-plants.component.css'],
})

export class ActionPlantsComponent implements OnInit {
  @Input() nameButton: string;
  @Input() plantId: string;
  
  constructor(private _route: Router) {}

  ngOnInit() {
  }
  detailPlant(plantId:string){
    this._route.navigate(['detail-plant/', plantId]);
  }
}