import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from 'src/app/Models/IProfile';
import { IRepository } from 'src/app/Models/IRepository';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit {
@Input() githubRepos:IRepository[];
@Input() githubProfile:IProfile;
  constructor() { }

  ngOnInit(): void {
  }

}
