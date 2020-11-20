import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { GitRepoService } from '../git-repo.service'
import { Repo } from '../../models/repo.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repos-list',
  templateUrl: './repos-list.component.html',
  styleUrls: ['./repos-list.component.css']
})
export class ReposListComponent implements OnInit {

  repos: Repo[];

  constructor(
    private gitRepoService: GitRepoService,
    private route: ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.gitRepoService.getRepos()
      .subscribe(
        (res: Repo[]) => {
          this.repos = res;
        }
      );
  }

  onSelected(index: number) {
    this.router.navigate(['/repos/branch', this.repos[index].name], {relativeTo: this.route});
  }

  goToLink(url: string) {
    window.open(url, "_blank");
  }

}
