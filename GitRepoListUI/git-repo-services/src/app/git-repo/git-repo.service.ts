import { Injectable } from '@angular/core';
import { GitService } from '../git.service';

@Injectable({providedIn: 'root'})
export class GitRepoService {

  constructor(
    private gitService: GitService
  ) {}

  getRepos() {
    return this.gitService.fetchUserRepos();
  }

  getBranches(repoName: string) {
    return this.gitService.fetchUserRepoBranches(repoName);
  }

  getBranchFiles(repoName: string) {
    return this.gitService.fetchUserRepoFiles(repoName);
  }

  getReadme(repoName: string) {
    return this.gitService.fetchUserRepoReadme(repoName);
  }

}
