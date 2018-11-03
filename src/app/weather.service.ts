import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  logWeather;

  constructor(private http: Http, public db: AngularFireDatabase) {
    this.logWeather = db.list('DataWeatherUser').valueChanges();
  }
  getWeather(city) {
    console.log('in API', city);
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=dbc0566566bdaf453cb158fbda5735ea');
  }
  getData() {
    console.log('mydatafire', this.logWeather);
    return this.logWeather;
    }
}
