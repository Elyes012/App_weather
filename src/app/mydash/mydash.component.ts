import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-mydash',
  templateUrl: './mydash.component.html',
  styleUrls: ['./mydash.component.css']
})
export class MydashComponent implements OnInit {

info: any;
city;
countries = [{name: 'Tunis'},
{name: 'Paris'},
{name: 'London'},
{name: 'Tokyo'}];

  constructor(private weatherService: WeatherService, private fb: FormBuilder) { }

  ngOnInit() {

  }
getWeather() {
  this.weatherService.getWeather(this.city).subscribe(res => {
    console.log('my data', res.json());
    this.info = res.json();
  });
}
}
