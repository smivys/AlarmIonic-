import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlarmListPage } from './../alarm-list/alarm-list';
import { AngularFireDatabase } from 'angularfire2/database';
//import { FavoriteProvider, Alarm } from './../../providers/favorite/favorite';
/**
 * Generated class for the TimeListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-time-list',
  templateUrl: 'time-list.html',
})
export class TimeListPage {

  //time: number[] = [];
  hour: number;
  minute: number;
  timeData: any;

  hour5Circle: number;
  minute5Circle: number;
  hour6Circle: number;
  minute6Circle: number;

  //alarms: Alarm[]= [];
  //newAlarm: Alarm = <Alarm>{};
  

  constructor(private afDB: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    //console.log(this.navParams.data); // lay du lieu tu home.ts
    this.hour = this.navParams.get("hour1");
    this.minute = this.navParams.get("minute1");
    console.log(this.minute);
    //this.time = this.navParams.data;
    //this.nowtime = this.navParams.data;

    //xu ly hour
    if (this.hour >= 9) {
      this.hour5Circle = Number(this.hour) - 7;
      this.hour6Circle = Number(this.hour) - 9;
      console.log("if_>=9");
      console.log(this.hour5Circle);
      console.log(this.hour6Circle);
    } else if (this.hour > 6) {
      this.hour5Circle = Number(this.hour) - 7;
      this.hour6Circle = 15 + Number(this.hour); // 24 - (9 - this.hour)
      console.log("if_>6");
      console.log(this.hour5Circle);
      console.log(this.hour6Circle);
    } else {
      this.hour5Circle = 17 + Number(this.hour); // 24 - (7 -this.hour)
      this.hour6Circle = 15 + Number(this.hour);
      console.log("if_<=6");
      console.log(this.hour5Circle);
      console.log(this.hour6Circle);
    } 
  
    //xu ly minute
    if(this.minute == 0){
      this.minute5Circle = 30;
      this.hour5Circle--;
    } else if(this.minute >= 30){
      this.minute5Circle = Number(this.minute) - 30;
    } else {
      this.minute5Circle = Number(this.minute) + 30;
      this.hour5Circle--;
      if(this.hour5Circle == -1){
        this.hour5Circle = 23;
      }
    }
    this.minute6Circle = this.minute;

    this.timeData = this.hour + ":" + this.minute; 
  }

  setAlarm(){
    //this.newAlarm.hour = this.hour;
    //this.newAlarm.minute = this.minute;
    //this.favoriteProvider.setAlarmInAlarmList(this.newAlarm);
    this.afDB.list("/myAlarms/").push(this.timeData);
    this.navCtrl.push(AlarmListPage, {nextHour: this.hour, nextMinute: this.minute});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimeListPage');
    
    //console.log(this.navParams.data);
  }

}
