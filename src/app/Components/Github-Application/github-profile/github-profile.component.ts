import { Component, Input, OnInit } from '@angular/core';
import { IProfile } from 'src/app/Models/IProfile';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
@Input() githubProfile:IProfile;
  constructor() { }

  ngOnInit(): void {
  }

}
