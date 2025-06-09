import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IEmployeeData } from '../Models/IEmployeeData';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private httpClient:HttpClient) { }
 public fetchAllEmployees():Observable<IEmployeeData[]>{
  let dataURL=`https://gist.githubusercontent.com/rt-git-8878/0c3a1ac496edf1224733bbec052db286/raw/97a993695b2aa8b9049b4795f2ef8be1b33bf94e/employee-06062025`;
return this.httpClient.get<IEmployeeData[]>(dataURL).pipe(
  retry(1)
);
}

}
