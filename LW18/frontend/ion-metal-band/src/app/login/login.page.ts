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

  public login(){
    this.service.checkUser(this.username, this.password).then(res =>{
      this.service.setUser(this.username);
      this.router.navigate(['/home']);
    }, err =>{
      this.userNotExistAlert(err.message);
    });
  }

  async userNotExistAlert(err){
    const alert = await this.alertController.create({
      header:'Alert!',
      subHeader:'Authentification error',
      message: err,
      buttons:['OK']
    });
    await alert.present();
  }

}
