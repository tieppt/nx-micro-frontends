import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailboxRoutingModule } from './mailbox-routing.module';
import { MailboxComponent } from './mailbox.component';


@NgModule({
  declarations: [
    MailboxComponent
  ],
  imports: [
    CommonModule,
    MailboxRoutingModule
  ]
})
export class MailboxModule { }
