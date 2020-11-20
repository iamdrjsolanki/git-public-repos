import { Component, OnInit } from '@angular/core';
import { GitRepoService } from '../git-repo.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Branch } from '../../models/branch.model';

@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.css']
})
export class BranchListComponent implements OnInit {

  branches: Branch[];
  repoName: string;

  constructor(
    private gitRepoService: GitRepoService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.repoName = params['repoName'];
          this.gitRepoService.getBranches(this.repoName)
            .subscribe(
              (res: Branch[]) => {
                this.branches = res;
              }
            );
        }
      );
  }

  onBranchSelected() {
    this.router.navigate(['/repos/file', this.repoName], {relativeTo: this.route});
  }

}
