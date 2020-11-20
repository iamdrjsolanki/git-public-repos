import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { ResponseModel } from '../models/response-model.model';
import { GitService } from '../git.service'

@Injectable({providedIn: 'root'})
export class GitUserService {

    user = new BehaviorSubject<User>(null);
    private SERVER_URL = 'http://localhost:8080/repo';
    tokenExpirationTimer: any;

    constructor(
      private http: HttpClient,
      private router: Router,
      private gitService: GitService
    ) {}

    login(userId: string) {
        return this.http
          .get(`${this.SERVER_URL}/get-user/${userId}`)
          .pipe(
            map(
              (res: ResponseModel) => {
                console.log('res: '+res);
                if(res.message != null) {
                  console.log(res.message);
                  return res.message;
                }
                console.log(res.userData);
                this.handleAuthentication(res.userData, 300);
                return res.userData;
              }
            ),
            catchError(this.handleError)
          );
    }

    logout() {
        this.user.next(null);
        this.router.navigate(['/git-user']);
        localStorage.removeItem('userData');
        if(this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }
    }

    private handleAuthentication(userData: User, expiresIn: number) {
        const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
        const user = new User(
          userData.login, userData.avatar_url, userData.html_url, userData.followers_url,
          userData.name, userData.followers, userData.following, userData.message, expirationDate
          );
        this.user.next(user);
        this.gitService.user = user;
        this.autoLogout(expiresIn * 1000);
        localStorage.setItem('userData', JSON.stringify(user));
    }

    autoLogout(expirationDuration: number) {
      this.tokenExpirationTimer = setTimeout(() => {
          this.logout();
      }, expirationDuration);
    }

    private handleError(errorRes: HttpErrorResponse) {
        let errorMessage = 'An error occurred.';
        if(!errorRes.error || !errorRes.error.error) {
            return throwError(errorMessage);
        }
        switch (errorRes.error.error.message) {
            case 'EMAIL_EXISTS':
                errorMessage = 'This email already exists!'
                break;
            case 'EMAIL_NOT_FOUND':
                errorMessage = 'This email does not exists!'
                break;
            case 'INVALID_PASSWORD':
                errorMessage = 'This password is not correct!'
                break;
        }
        return throwError(errorMessage);
    }
}
