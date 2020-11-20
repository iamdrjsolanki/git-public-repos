import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitRepoComponent } from './git-repo/git-repo.component';
import { GitUserComponent } from './git-user/git-user.component';
import { BranchListComponent } from './git-repo/branch-list/branch-list.component';
import { ReposListComponent } from './git-repo/repos-list/repos-list.component';
import { FileListComponent } from './git-repo/file-list/file-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/git-user', pathMatch: 'full' },
  { path: 'git-user', component: GitUserComponent },
  { path: 'repos', component: GitRepoComponent, children: [
    { path: '', component: ReposListComponent },
    { path: 'branch/:repoName', component: BranchListComponent },
    { path: 'file/:repoName', component: FileListComponent }
  ] }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
