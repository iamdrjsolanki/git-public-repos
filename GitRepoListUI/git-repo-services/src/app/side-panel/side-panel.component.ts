import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GitUserService } from '../git-user/git-user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css']
})
export class SidePanelComponent implements OnInit {

  private userSub: Subscription;
  userDetails: User;

  constructor(
    private gitUserService: GitUserService
  ) { }

  ngOnInit(): void {
    this.userSub = this.gitUserService.user
      .subscribe(
        (user: User) => {
          if(user == undefined) {
          } else {
            this.userDetails = user;
          }
        }
      );
  }

}
