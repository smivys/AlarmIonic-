import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { TimeListPage } from './../time-list/time-list';
import { NowtimeListPage } from './../nowtime-list/nowtime-list';
import { AlarmListPage } from './../alarm-list/alarm-list';
import { AngularFireAuth } from 'angularfire2/auth';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  constructor(private afAuth: AngularFireAuth, private toast: ToastController,
    public navCtrl: NavController) {

  }

  hour: number;
  minute: number;
  
  nowTime: Date = new Date();

  hournow: number = this.nowTime.getHours();
  minutenow: number = this.nowTime.getMinutes();

  hourChange(SelectedValue){
    this.hour = SelectedValue;
    console.log(this.hour);
  }
  minuteChange(SelectedValue){
    this.minute = SelectedValue;
    console.log(this.minute);
  }

  
  
  //time: any[] = [this.hour, this.minute];
  

  Calculate1(){
    this.navCtrl.push(TimeListPage, { hour1: this.hour, minute1: this.minute});
  }

  Calculate2(){
    this.navCtrl.push(NowtimeListPage, {hournow: this.hournow, minutenow: this.minutenow});
  }

  GoToAlarmList(){
    this.navCtrl.push(AlarmListPage);
  }
  ionViewWillload(){
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid){
        this.toast.create({
          message: 'Welcome to IonicAlarm, ${data.email}',
          duration: 3000
        }).present();
      } else {
        this.toast.create({
          message: 'Could not find authentication details',
          duration: 3000
        }).present();
      }
    })
  }
}
