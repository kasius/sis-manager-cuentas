import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

/**
 * This class represents the navigation bar component.
 */
@Component({
  moduleId: module.id,
  selector: 'button1',
  templateUrl: 'button1.component.html',
  styleUrls: ['button1.component.css'],
})

export class Button1Component implements OnInit {
  @Input() nameButton: string;
  @Input() idWorker: string;
  @Input() idPlant: string;
  
  constructor(private _route: Router) {}

  ngOnInit() {
  }
  pruebaClick(id:string){
    this._route.navigate(['detail-worker/', id]);
  }
}