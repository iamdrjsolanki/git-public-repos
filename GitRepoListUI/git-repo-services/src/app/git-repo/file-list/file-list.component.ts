import { Component, OnInit } from '@angular/core';
import { GitRepoService } from '../git-repo.service';
import { ActivatedRoute, Params } from '@angular/router';
import { BranchFile } from '../../models/branch-file.model';

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {

  repoName: string;
  branchFiles: BranchFile[];

  constructor(
    private gitRepoService: GitRepoService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.repoName = params['repoName']
          this.gitRepoService.getBranchFiles(this.repoName)
            .subscribe(
              (res: BranchFile[]) => {
                this.branchFiles = res;
              }
            );
        }
      );
  }

}
