import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlarmListPage } from './../alarm-list/alarm-list';

import { AngularFireDatabase } from 'angularfire2/database';
//import { FavoriteProvider, Alarm } from './../../providers/favorite/favorite';
/**
 * Generated class for the NowtimeListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nowtime-list',
  templateUrl: 'nowtime-list.html',
})
export class NowtimeListPage {

  //nowtime: number;
  hour: number;
  minute: number;
  //secondx, secondy: number;

  timeData5: any;
  timeData6: any;

  hourNow5Circle: number;
  minuteNow5Circle: number;
  hourNow6Circle: number;
  minuteNow6Circle: number;

  //alarms: Alarm[] = [];
  //newAlarm: Alarm = <Alarm>{};
  

  constructor(private afDB: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.hour = this.navParams.get("hournow"); //lay du lieu tu home.ts
    this.minute = this.navParams.get("minutenow");
    
    if (this.hour <= 15) { //xu ly gio`
      this.hourNow5Circle = this.hour + 7;
      this.hourNow6Circle = this.hour + 9;
      if(this.hourNow6Circle == 24){
        this.hourNow6Circle = 0;
      }
      console.log("if_<=15");// check if
      console.log(this.hourNow5Circle);
      console.log(this.hourNow6Circle);
    } 
    else if (this.hour < 18 ) {
      this.hourNow5Circle = this.hour + 7;
      this.hourNow6Circle = this.hour-15; // 9-24 + this.hour
      console.log("if_<18");
      console.log(this.hourNow5Circle);
      console.log(this.hourNow6Circle);
    } 
    else {
      this.hourNow5Circle = 7 - (24 - this.hour);
      this.hourNow6Circle = 9 - (24 - this.hour); // this.hour - 15
      console.log("if_>18");
      console.log(this.hourNow5Circle);
      console.log(this.hourNow6Circle);
    }
  
    if(this.minute < 30){
      this.minuteNow5Circle = this.minute + 30;
    } else {
        this.minuteNow5Circle = this.minute - 30;
      if (this.hourNow5Circle == 23){
        this.hourNow5Circle = 0;
      } else {
        this.hourNow5Circle++;
      } 
    }
    this.minuteNow6Circle = this.minute;

    this.timeData5 = this.hourNow5Circle+":"+this.minuteNow5Circle;
    this.timeData6 = this.hourNow6Circle+":"+this.minuteNow6Circle;
  }
  
  setAlarmNow5(){ // chuyen huong va du lieu sang alarmlistpage
    //this.newAlarm.hour = this.hourNow5Circle;
    //this.newAlarm.minute = this.minuteNow5Circle;
    //this.favoriteProvider.setAlarmInAlarmList(this.newAlarm);
    this.afDB.list("/myAlarms/").push(this.timeData5);
    this.navCtrl.push(AlarmListPage, {hourNow5Key: this.hourNow5Circle, minuteNow5Key: this.minuteNow5Circle});
  }

  setAlarmNow6(){
    //this.newAlarm.hour = this.hourNow6Circle;
    //this.newAlarm.minute = this.minuteNow6Circle;
    //this.favoriteProvider.setAlarmInAlarmList(this.newAlarm);
    this.afDB.list("/myAlarms/").push(this.timeData6);
    this.navCtrl.push(AlarmListPage, {hourNow6Key: this.hourNow6Circle, minuteNow6Key: this.minuteNow6Circle});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NowtimeListPage');
    console.log(this.navParams.get("hournow"));
  }

}
