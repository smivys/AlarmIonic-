import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NowtimeListPage } from './nowtime-list';

@NgModule({
  declarations: [
    NowtimeListPage,
  ],
  imports: [
    IonicPageModule.forChild(NowtimeListPage),
  ],
})
export class NowtimeListPageModule {}
