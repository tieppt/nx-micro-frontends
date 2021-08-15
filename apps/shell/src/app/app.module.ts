import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'mailbox',
        loadChildren: () => import('mailbox/MailboxModule').then(m => m.MailboxModule)
      },
      {
        path: 'calendar',
        loadChildren: () => import('calendar/CalendarModule').then(m => m.CalendarModule)
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
