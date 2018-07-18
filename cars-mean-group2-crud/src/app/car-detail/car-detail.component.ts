import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  car = {};

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getCarDetails(this.route.snapshot.params['id']);
  }

  getCarDetails(id) {
    this.api.getCar(id)
      .subscribe(data => {
        console.log(data);
        this.car = data;
      });
  }

  deleteCar(id) {
    this.api.deleteCar(id)
      .subscribe(res => {
          this.router.navigate(['/cars']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
