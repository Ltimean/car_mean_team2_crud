import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: any;
  displayedColumns = ['companyName', 'carModel', 'color'];
  dataSource = new CarDataSource(this.api);

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getCars()
      .subscribe(res => {
        console.log(res);
        this.cars = res;
      }, err => {
        console.log(err);
      });
  }
}

export class CarDataSource extends DataSource<any> {
  constructor(private api: ApiService) {
    super()
  }

  connect() {
    return this.api.getCars();
  }

  disconnect() {

  }
}
