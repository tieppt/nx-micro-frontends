import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MailboxComponent } from './mailbox.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MailboxComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MailboxRoutingModule { }
