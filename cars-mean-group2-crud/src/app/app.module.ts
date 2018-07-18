import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';




import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";
import { CarEditComponent } from './car-edit/car-edit.component';
import { CarCreateComponent } from './car-create/car-create.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { CarComponent } from './car/car.component';


const appRoutes: Routes = [
  {
    path: 'cars',
    component: CarComponent,
    data: { title: 'Car List' }
  },
  {
    path: 'car-details/:id',
    component: CarDetailComponent,
    data: { title: 'Car Details' }
  },
  {
    path: 'car-create',
    component: CarCreateComponent,
    data: { title: 'Create Car' }
  },
  {
    path: 'car-edit/:id',
    component: CarEditComponent,
    data: { title: 'Edit Car' }
  },
  { path: '',
    redirectTo: '/cars',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarDetailComponent,
    CarCreateComponent,
CarEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
