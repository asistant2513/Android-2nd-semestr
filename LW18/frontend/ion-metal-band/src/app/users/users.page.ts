import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  public roles = ['admin','user'];
  public users: User[];

  public showNew = false;

  constructor(private service: UserService) { }

  ngOnInit() {
    //this.service.getAll().subscribe(data => this.users = data);
  }

  public add(){
    this.showNew = true;
  }

  public addUser(user: User){
   // this.service.addUser(user).subscribe(res => this.service.getAll().subscribe((data: User[]) => this.users = data));
    this.showNew = false;
  }

  public delete(name: string){
    //this.service.remUser(name).subscribe(res => this.service.getAll().subscribe((data: User[]) => this.users = data));
  }

  public updateUser(user: User){
    //this.service.editUser(user).subscribe(res => this.service.getAll().subscribe((data: User[]) => this.users = data));
  }

}
