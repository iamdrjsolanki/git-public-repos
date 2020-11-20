import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GitRepoComponent } from './git-repo/git-repo.component';
import { FileListComponent } from './git-repo/file-list/file-list.component';
import { ReadMeComponent } from './git-repo/read-me/read-me.component';
import { ReposListComponent } from './git-repo/repos-list/repos-list.component';
import { BranchListComponent } from './git-repo/branch-list/branch-list.component';
import { GitUserComponent } from './git-user/git-user.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidePanelComponent } from './side-panel/side-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GitRepoComponent,
    FileListComponent,
    ReadMeComponent,
    ReposListComponent,
    BranchListComponent,
    GitUserComponent,
    SidePanelComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
