import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: Http) { }
  getWeather(city) {
    console.log('in API', city);
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=dbc0566566bdaf453cb158fbda5735ea');
  }
}
