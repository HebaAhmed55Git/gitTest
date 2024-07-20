import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class OurDataService {

  _HttpClient!:HttpClient
  x:string[] = ["Ahmed" , "ali" , "sara" , "heba"]
  constructor() { }

  getData():Observable<any>
  {
    this._HttpClient = inject(HttpClient)
   return this._HttpClient.get("https://jsonplaceholder.typicode.com/posts")
  }
}
