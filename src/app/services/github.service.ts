import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CLIENT_ID, CLIENT_SECRET } from '../Credentials/githubcredentials';
import { retry } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient:HttpClient) {}
    //Search Profile
    public searchProfile(githubUser):Observable<any>
    {
      let dataURL:string=`https://api.github.com/users/${githubUser}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    return this.httpClient.get<any>(dataURL).pipe(
      retry(1)
    );
    }

    //Search repos

    public searchRepos()
    {
      
    }
}
