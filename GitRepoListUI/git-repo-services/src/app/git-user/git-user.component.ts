import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GitUserService } from './git-user.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { ResponseModel } from '../models/response-model.model';

@Component({
  selector: 'app-git-user',
  templateUrl: './git-user.component.html',
  styleUrls: ['./git-user.component.css']
})
export class GitUserComponent implements OnInit {

  isLoading = false;

  constructor(
    private gitUserService: GitUserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.isLoading = true;
    const userId = form.value.gitUser;
    let authObs: Observable<any>;
    authObs = this.gitUserService.login(userId);
    form.reset();

    authObs.subscribe(
      resData => {
        console.log(resData);
        if(resData == '404 NOT_FOUND') {
        } else {
          this.router.navigate(['/repos']);
        }
      },
      errorMessage => {
        console.log(errorMessage);
      }
    );
  }

}
