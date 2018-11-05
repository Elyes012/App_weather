import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  logData;
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
    this.logData = this.weatherService.getData();
    console.log('from log', this.logData);

  }
  deleteItem(key: string) {
    console.log('key', key);
    this.itemsRef.remove(key);
  }

  roundValue(nbr) {
    return Math.round(nbr);
    }
}
