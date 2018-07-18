import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.css']
})
export class CarCreateComponent implements OnInit {

  carForm: FormGroup;
  companyName:string='';
  carModel:string='';
  description:string='';
  color:string='';
  price:string='';
  releaseYear:string='';

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.carForm = this.formBuilder.group({
      'companyName' : [null, Validators.required],
      'carModel' : [null, Validators.required],
      'description' : [null, Validators.required],
      'color' : [null, Validators.required],
      'price' : [null, Validators.required],
      'releaseYear' : [null, Validators.required]
    });
  }

  onFormSubmit(form:NgForm) {
    this.api.postCar(form)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/car-details', id]);
        }, (err) => {
          console.log(err);
        });
  }
}
