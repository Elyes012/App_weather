import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  datas;
  log;
  key: any;
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  constructor(private weatherService: WeatherService,  db: AngularFireDatabase, private  authService: AuthService) {
    this.itemsRef = db.list('DataWeatherUser');
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  ngOnInit() {
    this.log = this.weatherService.getData();
    console.log('from log', this.log);

  }
  deleteItem(key: string) {
    console.log('keyyy', key);
    this.itemsRef.remove(key);
  }

  roundValue(nbr) {
    return Math.round(nbr);
    }
}
