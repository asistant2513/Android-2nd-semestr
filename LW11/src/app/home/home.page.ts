import { Component } from '@angular/core';
import { Band } from '../interfaces/band';
import { DataGetterService } from '../service/data-getter.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  bands : Band[];

  showNew = false;
  showEdit = -1;

  constructor(private service: DataGetterService) {
    service.getBands().subscribe(
      (data) => this.bands = data
      );
  }

  public add(){
    this.showNew = true;
  }

  public addBand(band: Band){
    this.service.addBand(band)
    this.showNew = false;
  }

  public delete(index: number){
    this.service.remBand(index);
  }

  public getUsername(){
    return this.service.getUser();
  }

}
