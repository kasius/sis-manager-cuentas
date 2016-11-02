import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DetailPlantComponent } from './detail-plant.component';

@NgModule({
    imports: [CommonModule,SharedModule],
    declarations: [DetailPlantComponent],
    exports: [DetailPlantComponent]
})

export class DetailPlantModule { }
