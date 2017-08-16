import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Rx";

@Injectable()
export class WeatherProvider {
   
   apiKey = '23e60cbef6ef897c';
   url;
  constructor(public http:Http) { 
  	console.log("WeatherProvider Service")
    this.url = 'http://api.wunderground.com/api/23e60cbef6ef897c/conditions/q';
  }

  getWeather(city, state){
  	return this.http.get(this.url+'/'+state+'/'+city+'.json')
  	.map(res => res.json());
  }
 
  private handleError(error:any){
		return Observable.throw(error.json());

	}


}

