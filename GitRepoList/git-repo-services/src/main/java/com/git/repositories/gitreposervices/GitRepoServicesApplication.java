package com.git.repositories.gitreposervices;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(value="com.git.repositories.gitreposervices")
@SpringBootApplication
public class GitRepoServicesApplication 
{
	public static void main(String[] args) 
	{
		SpringApplication.run(GitRepoServicesApplication.class, args);
	}

}
