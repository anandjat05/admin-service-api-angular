import { LenderComponent } from './../lender/lender.component';
import { Component, OnInit, Input } from '@angular/core';
import { LenderService } from '../lender.service';


@Component({
  selector: 'app-show-lender',
  templateUrl: './show-lender.component.html',
  styleUrls: ['./show-lender.component.css']
})
export class ShowLenderComponent implements OnInit {

  allLender:object;
  @Input() lenderObject: LenderComponent;

  constructor(private lenderService:LenderService) { }

  ngOnInit() {
    this.loadAllLenders();
  }
  loadAllLenders(){
    this.lenderService.getAllLender().subscribe(
       resource=>{
         this.allLender=resource;
         console.log(this.allLender);
       }
     );
   }

   deleteLender(lender){
    if (confirm("Are you sure to delete this record?")) {
     this.lenderService.deleteLenderById(lender.id).subscribe(
       resource=>{
         console.log("Lender Deleted Successfully");
       }
     );
     }
     window.location.reload();
   }

  //  updateLender(lender){
  //   this.lenderObject.lenderApiForm.controls['name'].setValue(lender.name);
  //   this.lenderObject.lenderApiForm.controls['address'].setValue(lender.address);
  //  }

   updateLender(lender){
     
    let updateData = {
      id:lender.id,
      name:lender.name,
      address:{
        street:lender.address.street,
        city:lender.address.city,
        state:lender.address.street,
        zipcode:lender.address.state,
        country:lender.address.country,
      }

     };
     console.log(updateData)
     

    this.lenderService.updateLender(updateData).subscribe(
      response=>{
        // console.log(this.lenderApiForm.lenderApiForm.controls);
        this.lenderObject.lenderApiForm.controls['name'].setValue(lender.name);
        this.lenderObject.lenderApiForm.controls['address'].setValue(lender.address);
      });
   }

   

}
