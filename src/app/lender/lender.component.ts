
// import { Address } from './../address';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validator, Validators, FormControl } from '@angular/forms';
import { Observable , of} from 'rxjs'
// import { Observable} from 'rxjs'
import { LenderService } from '../lender.service';
// import { Lender } from '../lender';

@Component({
  selector: 'app-lender',    
  templateUrl: './lender.component.html',
  styleUrls: ['./lender.component.css']
})
export class LenderComponent implements OnInit {

  lenderForm:FormGroup;
  morefeedbacksControls: FormArray;
  lenderApiForm:FormGroup;
  allLender:any;

  constructor(private formBuilder:FormBuilder, private lenderService:LenderService) { 
    this.lenderApiForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      address :this.formBuilder.group({
        street:[null, [Validators.required]],
        city: [null, [Validators.required]],
        state:[null, [Validators.required]],
        zipcode:[null, [Validators.required]],
        country:[null, [Validators.required]]
      })
    });
  } 

  ngOnInit() {

  }
  onFormSubmit(){
    // console.log(this.lenderApiForm.value);
    let data = this.lenderApiForm.value;
    this.lenderService.createLender(data).subscribe(
      response=>{
        console.log(response);
        window.alert("Lender Name: "+data.name+" Created Successfully!");
        this.ngOnInit();
      });
      window.location.reload();

  }

  onSubmit(){
  }
  clearForm(){
    this.lenderForm.reset();
  }


}
