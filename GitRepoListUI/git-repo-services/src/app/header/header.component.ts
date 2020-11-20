import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GitUserService } from '../git-user/git-user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  private userSub: Subscription;
  userId: string;
  isAuthenticated = false;
  collapsed = true;

  constructor(
    private gitUserService: GitUserService
  ) { }

  ngOnInit(): void {
    this.userSub = this.gitUserService.user
      .subscribe(
        (user: User) => {
          if(user == undefined) {
            this.discardUser();
          } else {
            this.getUser(user);
          }
        }
      );
  }

  getUser(user: User) {
    this.isAuthenticated = true;
    this.userId = user.login;
  }

  discardUser() {
    this.isAuthenticated = false;
    this.userId = null;
  }

  onLogout() {
    this.gitUserService.logout();
  }

}
