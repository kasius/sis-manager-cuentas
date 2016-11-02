import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AccountComponent } from './account.component';

@NgModule({
    imports: [CommonModule,SharedModule],
    declarations: [AccountComponent],
    exports: [AccountComponent]
})

export class AccountModule { }
