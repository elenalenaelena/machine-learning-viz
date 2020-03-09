import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EventModel } from 'src/app/shared/models/event.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: Observable<EventModel>;

  constructor(private http: HttpClient) {
    this.data = this.http.get<EventModel>('src/app/shared/data/events.json');
  }
}