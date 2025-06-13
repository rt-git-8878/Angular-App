import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { IContact } from '../Models/IContact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private httpClient:HttpClient) { }
  //getAllContacts
  public getAllContacts():Observable<IContact[]>
  {
    let dataURL:string=`https://gist.githubusercontent.com/rt-git-8878/0c3a1ac496edf1224733bbec052db286/raw/97a993695b2aa8b9049b4795f2ef8be1b33bf94e/employee-06062025`;
    return this.httpClient.get<IContact[]>(dataURL).pipe(
      retry(1),
      catchError(this.handleError)

    );
  }
  public handleError(error:HttpErrorResponse)
  {
     let errorMessage:string='';
     if(error.error instanceof ErrorEvent)
     {
      //Client Error
      errorMessage=`Error: ${error.error.message}`;
     }
     else
     {
      //Server Error 
      errorMessage=`Status: ${error.status} \n Message : ${error.message}`;
     }
     return throwError(errorMessage);
  }
}
