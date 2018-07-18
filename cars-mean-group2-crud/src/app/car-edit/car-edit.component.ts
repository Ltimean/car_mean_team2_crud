import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css']
})
export class CarEditComponent implements OnInit {

  carForm: FormGroup;
  id:string = '';
  companyName:string = '';
  carModel:string = '';
  description:string = '';
  color:string = '';
  price:string = '';
  releaseYear:string = '';

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getCar(this.route.snapshot.params['id']);
    this.carForm = this.formBuilder.group({
      'companyName' : [null, Validators.required],
      'carModel' : [null, Validators.required],
      'description' : [null, Validators.required],
      'color' : [null, Validators.required],
      'price' : [null, Validators.required],
      'releaseYear' : [null, Validators.required]
    });
  }

  getCar(id) {
    this.api.getCar(id).subscribe(data => {
      this.id = data._id;
      this.carForm.setValue({
        companyName: data.companyName,
        carModel: data.carModel,
        description: data.description,
        color: data.color,
        price: data.price,
        releaseYear: data.releaseYear
      });
    });
  }

  onFormSubmit(form:NgForm) {
    this.api.updateCar(this.id, form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/car-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

  carDetails() {
    this.router.navigate(['/car-details', this.id]);
  }
}
