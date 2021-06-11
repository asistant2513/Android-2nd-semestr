import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {

  @Input() user: User;
  @Input() isNew: boolean;
  @Output() addUser = new EventEmitter();
  @Output() cancelAddingUser = new EventEmitter();
  @Output() editUser = new EventEmitter();
  title: string;

  constructor() { }

  public ngOnInit() {
    if(this.isNew){
      this.user = {
        username: '',
        password: '',
        role: ''
      };
      this.title = "New User";
    }
  }

  public add(){
    if(this.isNew){
      this.addUser.emit(this.user);
    }
  }

  public edit(){
    this.editUser.emit(this.user);
  }

  public cancelAdding(){
    if(this.isNew){
      this.cancelAddingUser.emit();
    }
  }

}
