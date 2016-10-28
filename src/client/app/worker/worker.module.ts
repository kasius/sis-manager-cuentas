import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { WorkerComponent } from './worker.component';
import { NameListService } from '../shared/name-list/index';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [WorkerComponent],
  exports: [WorkerComponent],
  providers: [NameListService]
})
export class WorkerModule { }
