import { Component, OnInit } from '@angular/core';
//import { NgxSpinnerService } from 'ngx-spinner';
import { IProfile } from 'src/app/Models/IProfile';
import { IRepository } from 'src/app/Models/IRepository';
import { GithubService } from 'src/app/services/github.service';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})
export class GithubAppComponent implements OnInit {
public githubUser:string;
public githubProfile:IProfile;
public githubRepos:IRepository[]=[];
  constructor(private githubService:GithubService) { }

  ngOnInit(): void {
  }
public submitUser()
{
  //profile
 // this.ngxSpinner.show(); // show the spinner
  this.githubService.searchProfile(this.githubUser).subscribe((data)=>{
this.githubProfile=data;
  });
  //repos
  this.githubService.searchRepos(this.githubUser).subscribe((data)=>{
    this.githubRepos=data;
    //this.ngxSpinner.hide();  // hide the spinner
  });
}
}
