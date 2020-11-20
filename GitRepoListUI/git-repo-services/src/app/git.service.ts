import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './models/user.model';
import { ResponseModel } from './models/response-model.model';
import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class GitService {

  private SERVER_URL = 'http://localhost:8080/repo';
  user: User;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  fetchUserRepos() {
    if(this.user == null) {
      return;
    }
    return this.http
      .get(`${this.SERVER_URL}/get-repos/${this.user.login}`)
      .pipe(
        map(
          (res: ResponseModel) => {
            console.log(res.repoList);
            return res.repoList;
          }
        )
      );
  }

  fetchUserRepoBranches(repoName: string) {
    if(this.user == null) {
      return;
    }
    return this.http
      .get(`${this.SERVER_URL}/get-branches/${this.user.login}/${repoName}`)
      .pipe(
        map(
          (res: ResponseModel) => {
            console.log(res.branchList);
            return res.branchList;
          }
        )
      );
  }

  fetchUserRepoFiles(repoName: string) {
    if(this.user == null) {
      return;
    }
    return this.http
      .get(`${this.SERVER_URL}/get-contents/${this.user.login}/${repoName}`)
      .pipe(
        map(
          (res: ResponseModel) => {
            console.log(res.filesList);
            return res.filesList;
          }
        )
      );
  }

  fetchUserRepoReadme(repoName: string) {
    if(this.user == null) {
      return;
    }
    return this.http
      .get(`${this.SERVER_URL}/get-readme/${this.user.login}/${repoName}`)
      .pipe(
        map(
          (res: ResponseModel) => {
            console.log(res.readme);
            return res.readme;
          }
        )
      );
  }

}
