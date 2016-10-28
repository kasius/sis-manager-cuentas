import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PlantComponent } from './plant.component';
import { NameListService } from '../shared/name-list/index';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [PlantComponent],
  exports: [PlantComponent],
  providers: [NameListService]
})
export class PlantModule { }
