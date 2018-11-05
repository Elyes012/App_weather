import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  time;
  info: any;
  urlWindy: string;
  videoUrl: SafeResourceUrl;
  city: String;
  math;
dataWeather;
theDate = Date.now();

  // tslint:disable-next-line:max-line-length
  constructor(private weatherService: WeatherService, private fb: FormBuilder, private sanitizer: DomSanitizer, private db: AngularFireDatabase, private authService: AuthService, private route: Router) {
    this.math = Math;
    this.dataWeather = db.list('DataWeatherUser').valueChanges();

  }
  ngOnInit() {
  }


getWeather() {
  this.weatherService.getWeather(this.city).subscribe(res => {
    this.info = res.json();
    this.urlWindy = 'https://cors.io/?https://www.windfinder.com/#7/' + this.info.coord.lat + '/' + this.info.coord.lon;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlWindy );
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
}
