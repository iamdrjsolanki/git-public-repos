import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GitUserService } from './git-user/git-user.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'git-repo-services';
  private userSub: Subscription;
  isLoggedIn = false;

  constructor(
    private gitUserService: GitUserService
  ) {}

  ngOnInit(): void {
    this.userSub = this.gitUserService.user
      .subscribe(
        (user: User) => {
          if(user == undefined) {
            this.isLoggedIn = false;
          } else {
            this.isLoggedIn = true;
          }
        }
      );
  }

}
