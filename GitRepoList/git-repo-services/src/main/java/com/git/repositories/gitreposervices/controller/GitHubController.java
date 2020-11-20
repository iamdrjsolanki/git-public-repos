package com.git.repositories.gitreposervices.controller;

import java.io.IOException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;

import com.git.repositories.gitreposervices.model.BranchData;
import com.git.repositories.gitreposervices.model.FilesData;
import com.git.repositories.gitreposervices.model.Readme;
import com.git.repositories.gitreposervices.model.RepoData;
import com.git.repositories.gitreposervices.model.ResponseModel;
import com.git.repositories.gitreposervices.model.UserData;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class GitHubController 
{
	//only for testing purpose, not to be exposed
	@GetMapping("/repo/get-repo-services")
	public String checkApplication() throws IOException 
	{
		return "Welcome";
	}
	
	@GetMapping("/repo/get-user/{userId}")
	public ResponseEntity<?> getGitUser(@PathVariable("userId") String userId) throws IOException 
	{
		String url = "https://api.github.com/users/" + userId;
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<UserData> response = null;
		try {
			response = restTemplate.getForEntity(url, UserData.class);
			return ResponseEntity.ok(new ResponseModel(response.getBody()));
		}
		catch (HttpClientErrorException e) {
		    response = new ResponseEntity<UserData>(e.getStatusCode());
		    return ResponseEntity.ok(new ResponseModel(response.getStatusCode().toString()));
		}
	}
	
	@GetMapping("/repo/get-repos/{userId}")
	public ResponseEntity<?> getUserRepositories(@PathVariable("userId") String userId) throws IOException 
	{
		String url = "https://api.github.com/users/" + userId + "/repos";
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<RepoData[]> response = restTemplate.getForEntity(url, RepoData[].class);
		return ResponseEntity.ok(new ResponseModel(response.getBody()));
	}
	
	@GetMapping("/repo/get-branches/{userId}/{repoName}")
	public ResponseEntity<?> getUserRepoBranches(@PathVariable("userId") String userId, @PathVariable("repoName") String repoName) throws IOException 
	{
		String url = "https://api.github.com/repos/" + userId + "/" + repoName + "/branches";
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<BranchData[]> response = restTemplate.getForEntity(url, BranchData[].class);
		return ResponseEntity.ok(new ResponseModel(response.getBody()));
	}
	
	@GetMapping("/repo/get-contents/{userId}/{repoName}")
	public ResponseEntity<?> getUserRepoBranchContents(@PathVariable("userId") String userId, @PathVariable("repoName") String repoName) throws IOException 
	{
		String url = "https://api.github.com/repos/" + userId + "/" + repoName + "/contents";
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<FilesData[]> response = restTemplate.getForEntity(url, FilesData[].class);
		return ResponseEntity.ok(new ResponseModel(response.getBody()));
	}
	
	@GetMapping("/repo/get-readme/{userId}/{repoName}")
	public ResponseEntity<?> getUserRepoReadme(@PathVariable("userId") String userId, @PathVariable("repoName") String repoName) throws IOException 
	{
		String url = "https://api.github.com/repos/" + userId + "/" + repoName + "/readme";
		RestTemplate restTemplate = new RestTemplate();
		ResponseEntity<Readme> response = restTemplate.getForEntity(url, Readme.class);
		return ResponseEntity.ok(new ResponseModel(response.getBody()));
	}
	
}
