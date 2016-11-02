import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DetailWorkerComponent } from './detail-worker.component';

@NgModule({
    imports: [CommonModule,SharedModule],
    declarations: [DetailWorkerComponent],
    exports: [DetailWorkerComponent]
})

export class DetailWorkerModule { }
