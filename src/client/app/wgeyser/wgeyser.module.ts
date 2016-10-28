import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { WGeyserComponent } from './wgeyser.component';
import { NameListService } from '../shared/name-list/index';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [WGeyserComponent],
  exports: [WGeyserComponent],
  providers: [NameListService]
})
export class WGeyserModule { }
