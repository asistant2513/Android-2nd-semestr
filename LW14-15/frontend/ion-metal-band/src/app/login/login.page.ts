import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private username: string;
  private password: string;

  constructor(private router: Router,
              private service: UserService,
              public alertController: AlertController) { }

  ngOnInit() {
  }

  public async login(){
    await this.service.checkUser(this.username, this.password);
    if(this.service.getUser()){
      this.router.navigate(['/home']);
    }
    else 
      this.userNotExistAlert();
  }

  async userNotExistAlert(){
    const alert = await this.alertController.create({
      header:'Alert!',
      subHeader:'Authefication error',
      message: 'Invalid username or password!',
      buttons:['OK']
    });
    await alert.present();
  }

}
