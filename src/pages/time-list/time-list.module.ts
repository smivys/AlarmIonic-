import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimeListPage } from './time-list';

@NgModule({
  declarations: [
    TimeListPage,
  ],
  imports: [
    IonicPageModule.forChild(TimeListPage),
  ],
})
export class TimeListPageModule {}
