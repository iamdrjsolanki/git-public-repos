export class User {

    constructor(
      public login: string,
    	public avatar_url: string,
    	public html_url: string,
    	public followers_url: string,
    	public name: string,
    	public followers: number,
    	public following: number,
    	public message: string,
      public _tokenExpirationDate: Date
    ) {}

}
