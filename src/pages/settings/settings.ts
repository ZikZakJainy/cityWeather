import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

	city:string;
	state:string;

  constructor(public navCtrl: NavController, public navParams:NavParams, private storage:Storage) {
  	console.log("setting page");

     this.storage.get('location').then((val)=>{
      if(val != null){
       let location = JSON.parse(val);
       this.city = location.city;
       this.state = location.state;
      }
      else{
        
            this.city = 'Bengaluru';
            this.state = 'KA';
      }
    })

  }

  myLocation(){
  	let location = {
  		city: this.city,
  		state: this.state
  	}
  	this.storage.set('location', JSON.stringify(location));
    this.navCtrl.push(HomePage);
  }

}
