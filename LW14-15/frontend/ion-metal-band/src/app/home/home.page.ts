import { Component } from '@angular/core';
import { Band } from '../interfaces/band';
import { BandService } from '../services/band.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  bands : Band[];

  showNew = false;
  showEdit = -1;

  currentCount = 0;
  step = 10;

  public dataFromOther;

  constructor(private bandService: BandService,
              private userService: UserService) {
    bandService.getBands().subscribe((data: Band[]) => {
      this.bands = data.slice(this.currentCount, this.step);
      this.currentCount += this.step;
    });
  }

  public add(){
    this.showNew = true;
  }

  public addBand(band: Band){
    this.bandService.addBand(band).subscribe(res => this.bandService.getBands().subscribe((data: Band[]) => this.bands = data));
    this.showNew = false;
  }

  public delete(index: number){
    this.bandService.remBand(index).subscribe(res => this.bandService.getBands().subscribe((data: Band[]) => this.bands = data));
  }

  public updateBand(band: Band){
    this.bandService.updateBand(band).subscribe(res => this.bandService.getBands().subscribe((data: Band[]) => this.bands = data));
  }

  public getUsername(){
    return this.userService.getUser().username;
  }

  public isUserAdmin(){
    return this.userService.getUser().role == 'admin';
  }

  public logout(){
    this.userService.clearuser();
  }

  public refresh(event){
    setTimeout(() => {this.bandService.getBands().subscribe((data: Band[]) => {
      this.bands = data.slice(0,10); 
      event.target.complete()
    });
  }, 2000);
  }

  public loadData(event){
    setTimeout(() => {this.bandService.getBands().subscribe((data: Band[]) => {
      this.bands = this.bands.concat(data.slice(this.currentCount, this.currentCount + this.step));
      this.currentCount += this.step;
      event.target.complete()
    });
  }, 2000);
  }

}
