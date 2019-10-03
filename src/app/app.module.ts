import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { LenderComponent } from './lender/lender.component';
import {LenderService} from './lender.service';
import * as OktaAuth from '@okta/okta-auth-js';


import { 
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatOptionModule,
  MatSlideToggleModule,
  
 } from '@angular/material';
import { ShowLenderComponent } from './show-lender/show-lender.component';



@NgModule({
  declarations: [
    AppComponent,
    LenderComponent,
    ShowLenderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule, 
    MatSlideToggleModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
    
    
  ],
  providers: [
    LenderService, 
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
