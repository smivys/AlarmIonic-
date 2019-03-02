//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the FavoriteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export interface Alarm{
  hour: number,
  minute: number
}

const STORAGE_KEY = 'myAlarm';

@Injectable()
export class FavoriteProvider {

  constructor(private storage: Storage) {
    //console.log('Hello FavoriteProvider Provider');

  }
  getAlarmList(): Promise<Alarm[]>{
    return this.storage.get(STORAGE_KEY);
  }
  setAlarmInAlarmList(alarm: Alarm): Promise<any>{
  return this.storage.get(STORAGE_KEY).then((alarms: Alarm[]) => {
    if (alarms){
      alarms.push(alarm);
      return this.storage.set(STORAGE_KEY, alarms);
    } else {
      return this.storage.set(STORAGE_KEY, [alarm]);
    }
  }); 
}

  deleteAlarm(minute: number): Promise<Alarm>{
    return this.storage.get(STORAGE_KEY).then((alarms: Alarm[]) => {
      if (!alarms || alarms.length === 0){
        return null;
      }
      let toKeep: Alarm[] = [];

      for (let i of alarms){
        if (i.minute !== minute) {
          toKeep.push(i);
        }
      }
      return this.storage.set(STORAGE_KEY, toKeep);
    });
  }

}
