import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8080/users";

  private currentUser: User;

  constructor(private client: HttpClient) { }

  public async checkUser(username: string, password: string){
    var url = this.baseUrl + "/" + username + "?password=" + password;
    this.currentUser = await this.client.get<User>(url).toPromise();
  }

  public getUser(){
    return this.currentUser;
  }

  public clearuser(){
    this.currentUser = null;
  }

  public getAll(){
    return this.client.get<User[]>(this.baseUrl);
  }

  public addUser(user: User){
    return this.client.post(this.baseUrl, user);
  }

  public editUser(user: User){
    return this.client.patch(this.baseUrl, user);
  }

  public remUser(username: string){
    return this.client.delete(this.baseUrl+ "/" + username);
  }

}
