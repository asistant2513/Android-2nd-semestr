import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8080/users";

  private currentUser: string = '';

  constructor(private auth: AngularFireAuth) { }

  public checkUser(username: string, password: string){
    return this.auth.signInWithEmailAndPassword(username, password);
  }

  public getUser(){
    return this.currentUser;
  }

  setUser(username){
    this.currentUser = username;
  }

  public clearuser(){
    this.currentUser = null;
  }

  public getAll(){
    //return this.client.get<User[]>(this.baseUrl);
  }

  public addUser(user: User){
    //return this.client.post(this.baseUrl, user);
  }

  public editUser(user: User){
    //return this.client.patch(this.baseUrl, user);
  }

  public remUser(username: string){
    //return this.client.delete(this.baseUrl+ "/" + username);
  }

}
