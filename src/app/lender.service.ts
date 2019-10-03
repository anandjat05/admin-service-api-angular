import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable , of} from 'rxjs'
// import { Lender } from './lender';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LenderService {

  url = 'https://q9uwvji5hh.execute-api.us-east-1.amazonaws.com/sbx/api/lenders';

  constructor(private http:HttpClient) { }

  getAllLender(){
    return this.http.get(this.url);
  }
  getLenderById(lenderid:string){
    return this.http.get(this.url+"/"+lenderid);
  }
  createLender(resource){
     let httpHeaders=new HttpHeaders()
      .set('Content-Type', 'application/json');
    let options={
      headers:httpHeaders
    };
    return this.http.post(this.url, JSON.stringify(resource), options);
  }

  updateLender(resource){
    console.log(resource.id)
    let httpHeaders=new HttpHeaders()
    .set('Content-Type', 'application/json');
  let options={
    headers:httpHeaders
  };
    return this.http.put(this.url+"/"+resource.id, JSON.stringify(resource), options)
  }

  deleteLenderById(lenderid:string):Observable<number>{
    let httpHeaders=new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.delete<number>(this.url+"/"+lenderid);
  }


}
