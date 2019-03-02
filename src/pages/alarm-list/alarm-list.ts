import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { FavoriteProvider, Alarm } from './../../providers/favorite/favorite';
//import { TimeListPage } from '../time-list/time-list';

import { AngularFireDatabase } from 'angularfire2/database';


/**
 * Generated class for the AlarmListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alarm-list',
  templateUrl: 'alarm-list.html',
})
export class AlarmListPage {

  //alarms: Alarm[] = [];
  arrayData = [];
  hourNow5Circle: Number;
  minuteNow5Circle: Number;
  hourNow6Circle: Number;
  minuteNow6Circle: Number;

  hourSetUp: Number;
  minuteSetUp: Number;

  ngModel = true;

  //@ViewChild('mylist')mylist: List;
  constructor(private afDB: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.afDB.list("/myAlarms/").valueChanges().subscribe(data => {
      console.log(data);
      this.arrayData = data;
    });
    console.log(this.arrayData);

    this.hourSetUp = this.navParams.get("nextHour");
    this.minuteSetUp = this.navParams.get("nextMinute");

    this.hourNow5Circle = this.navParams.get("hourNow5Key");
    this.minuteNow5Circle = this.navParams.get("minuteNow5Key");
    this.hourNow6Circle = this.navParams.get("hourNow6Key");
    this.minuteNow6Circle = this.navParams.get("minuteNow6Key");

    /* dataAlarm = {
      firstItemOfAlarmList: true,
      secondItemOfAlarmList: true,
      thirdItemOfAlarmList: true
    }; */
    

  }

  toggle(ngModel){
    if(this.ngModel == true){
      this.ngModel = false;
    }
    if(this.ngModel == false){
      this.ngModel = true;
    }
  }

  
  delete(item){
    //this.arrayData.splice(i,1);
    this.afDB.list("/myAlarms").remove(item.$key);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlarmListPage');
  }

}
