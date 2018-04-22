import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BankDepositsComponent } from './bank-deposits/bank-deposits.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 

import {MatOptionModule,MatSelectModule,MatInputModule,MatFormFieldModule} from '@angular/material';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { BankDepositsService } from '../app/bank-deposits.service';
import {HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent,
    BankDepositsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatOptionModule,MatSelectModule,MatFormFieldModule,MatInputModule,
    NoopAnimationsModule,
    HttpClientModule
  ],
  exports:[
    MatOptionModule,MatSelectModule,MatFormFieldModule,MatInputModule
  ],
  providers: [
    BankDepositsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
