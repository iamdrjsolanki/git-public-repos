import { Component, OnInit, EventEmitter } from '@angular/core';
import { GitRepoService } from './git-repo.service';

@Component({
  selector: 'app-git-repo',
  templateUrl: './git-repo.component.html',
  styleUrls: ['./git-repo.component.css'],
  providers: [GitRepoService]
})
export class GitRepoComponent implements OnInit {

  constructor(private gitRepoService: GitRepoService) { }

  ngOnInit(): void {
  }

}
