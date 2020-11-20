import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Readme } from 'src/app/models/readme.model';
import { GitRepoService } from '../git-repo.service';

@Component({
  selector: 'app-read-me',
  templateUrl: './read-me.component.html',
  styleUrls: ['./read-me.component.css']
})
export class ReadMeComponent implements OnInit {

  @Input() repoNameForReadme: string;
  readmeObj: Readme;
  fetchReadme: boolean = false;
  content: string;

  constructor(
    private gitRepoService: GitRepoService,
    private sanitizer: DomSanitizer,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    if(this.repoNameForReadme) {
      this.gitRepoService.getReadme(this.repoNameForReadme)
        .subscribe(
          (res: Readme) => {
            this.readmeObj = res;
            this.fetchReadme = true;
            this.http
              .get(
                this.readmeObj.download_url,
                {responseType: 'text'}
              )
              .subscribe((content:string) => this.content = content);
            console.log("url: "+this.readmeObj.download_url);
          }
        );
    }
  }

}
