import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { WeatherProvider } from '../../app/weather.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   weather:any;
   location:{
   	city:string,
   	state:string
   }
  constructor(public navCtrl: NavController, private weatherService:WeatherProvider, private storage:Storage) {

  }

  ionViewWillEnter(){

    this.storage.get('location').then((val)=>{
      if(val != null){
        this.location = JSON.parse(val);
        console.log("If is working "+ JSON.stringify(this.location));
        this.getWeaterData();
      }
      else{
        this.location = {
            city: 'Bengaluru',
            state: 'KA'
         }
        this.getWeaterData();
      }
    })
  }

  getWeaterData(){
    this.weatherService.getWeather(this.location.city, this.location.state).subscribe((res)=>{
      this.weather = res.current_observation;
      console.log("Response of weather Serrvice "+JSON.stringify(this.weather));
    })
  }

}
