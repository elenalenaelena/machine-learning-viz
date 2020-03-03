import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ZooModel } from 'src/app/data/zoo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: Observable<ZooModel>;

  constructor(private http: HttpClient) {
    this.data = this.http.get<ZooModel>('./assets/animals.json');
  }
}