import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { WorkerComponent } from './worker.component';
import { TokenAccess } from '../services/token.services';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [WorkerComponent],
  exports: [WorkerComponent],
  providers: [TokenAccess]
})
export class WorkerModule { }
