import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  user = {} as User;

  constructor(private alertCtrl: AlertController, private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    
  }


 async signup(user: User){
    try {
      const RESULT = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(RESULT);
      if(RESULT){
        this.alertCtrl.create({
          title:'Signup successful',
          subTitle:'Please relogin!!!',
          buttons: ['OK']
        }).present();
        this.navCtrl.push(LoginPage);
      }
    } catch (e){
      console.error(e);
    }
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
