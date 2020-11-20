import { Repo } from '../models/repo.model';
import { Branch } from '../models/branch.model';
import { BranchFile } from '../models/branch-file.model';
import { Readme } from '../models/readme.model';

export class ResponseModel {

  constructor(
    public userData: any,
    public repoList: Repo[],
    public branchList: Branch[],
    public filesList: BranchFile[],
    public readme: Readme,
    public message: string
  ) {}

}
