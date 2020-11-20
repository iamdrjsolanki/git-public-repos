package com.git.repositories.gitreposervices.model;

public class ResponseModel {
	
	public UserData userData;
	public RepoData[] repoList;
	public BranchData[] branchList;
	public FilesData[] filesList;
	public Readme readme;
	public String message;
	
	public ResponseModel(UserData userData) {
		super();
		this.userData = userData;
	}
	
	public ResponseModel(RepoData[] repoList) {
		super();
		this.repoList = repoList;
	}
	
	public ResponseModel(BranchData[] branchList) {
		super();
		this.branchList = branchList;
	}

	public ResponseModel(FilesData[] filesList) {
		super();
		this.filesList = filesList;
	}
	
	public ResponseModel(String message) {
		super();
		this.message = message;
	}

	public ResponseModel(Readme readme) {
		super();
		this.readme = readme;
	}
	
}
