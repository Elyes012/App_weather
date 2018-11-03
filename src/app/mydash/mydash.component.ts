import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-mydash',
  templateUrl: './mydash.component.html',
  styleUrls: ['./mydash.component.css']
})
export class MydashComponent implements OnInit {

info: any;
indexCity;
urlWindfinder: string;
videoUrl: SafeResourceUrl;
city: String;
ladate = Date.now();

/*countries = [{name: 'Tunis', lat: '10.18', lon: '36.8'},
{name: 'Paris', lat: '2.35', lon: '48.86'},
{name: 'London', lat: '-0.13', lon: '51.51'},
{name: 'Tokyo', lat: '136.76', lon: '35.68'}];*/

  constructor(private weatherService: WeatherService, private fb: FormBuilder, private sanitizer: DomSanitizer) { }

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
    this.urlWindfinder = 'https://cors.io/?https://www.windfinder.com/#7/' + this.info.coord.lat + '/' + this.info.coord.lon;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.urlWindfinder );
    console.log('url video', this.videoUrl);
  });

}

}
