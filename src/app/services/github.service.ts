import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CLIENT_ID, CLIENT_SECRET } from '../Credentials/githubcredentials';
import { retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IProfile } from '../Models/IProfile';
import { IRepository } from '../Models/IRepository';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient:HttpClient) {}
    //Search Profile
    public searchProfile(githubUser):Observable<IProfile>
    {
      let dataURL:string=`https://api.github.com/users/${githubUser}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    return this.httpClient.get<IProfile>(dataURL).pipe(
      retry(1)
    );
    }

    //Search repos

    public searchRepos(githubUser):Observable<IRepository[]>
    {
      debugger;
        let dataURL:string=`https://api.github.com/users/${githubUser}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    return this.httpClient.get<IRepository[]>(dataURL).pipe(
      retry(1)
    ); 
    }
}
