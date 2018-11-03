import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }
log;

  ngOnInit() {
    this.log = this.weatherService.getData();
    console.log('from log', this.log);

  }

}
