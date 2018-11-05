import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-testdash',
  templateUrl: './testdash.component.html',
  styleUrls: ['./testdash.component.css'],
})
export class TestdashComponent implements OnInit {

  time;
    info: any;
    indexCity;
    urlWindfinder: string;
    videoUrl: SafeResourceUrl;
    city: String;
    ladate = Date.now();
    math;
  dataWeather;
  logWeather;
    /*countries = [{name: 'Tunis', lat: '10.18', lon: '36.8'},
    {name: 'Paris', lat: '2.35', lon: '48.86'},
    {name: 'London', lat: '-0.13', lon: '51.51'},
    {name: 'Tokyo', lat: '136.76', lon: '35.68'}];*/
      // tslint:disable-next-line:max-line-length
      constructor(private weatherService: WeatherService, private fb: FormBuilder, private sanitizer: DomSanitizer, private db: AngularFireDatabase, private authService: AuthService, private route: Router) {
        this.math = Math;
        this.dataWeather = db.list('DataWeatherUser').valueChanges();
        this.logWeather = db.list('DataWeatherUser').snapshotChanges();
      }
      ngOnInit() {
      }

    /*getWeather() {
      console.log(this.indexCity);
      this.weatherService.getWeather(this.countries[this.indexCity].name).subscribe(res => {
        console.log('my data', res.json());
        this.info = res.json();
        // tslint:disable-next-line:max-line-length

        this.urlWindfinder = 'https://cors.io/?https://www.windfinder.com/#7/' + this.countries[this.indexCity].lon
        + '/' + this.countries[this.indexCity].lat;
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlWindfinder );
      });
    } ==> Code avec select*/

    getWeather() {
      this.weatherService.getWeather(this.city).subscribe(res => {
        this.info = res.json();
        this.urlWindfinder = 'https://www.windy.com/?' + this.info.coord.lat + '/' + this.info.coord.lon;
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlWindfinder );
        console.log('url video', this.videoUrl);
      });
    }
saveData() {
  this.weatherService.getWeather(this.city).subscribe(res => {
    this.info = res.json();
    this.db.list('DataWeatherUser').push({
data: this.info,
time: Date.now(),
    });
  });
}
outLog() {
  this.authService.logout();
  this.route.navigateByUrl('/login');
}
  }
