import { Component } from '@angular/core';
import { Band } from '../interfaces/band';
import { DataGetterService } from '../service/data-getter.service';
import { SharedDataService } from '../service/shared-data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  bands : Band[];

  showNew = false;
  showEdit = -1;

  public dataFromOther;

  constructor(private service: DataGetterService,
              private sharedData: SharedDataService) {
    service.getBands().subscribe(
      (data) => this.bands = data
      );
  }

  public ionViewDidEnter(){
    if(this.sharedData.getData() !== ''){
      this.dataFromOther = this.sharedData.getData();
    }
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
