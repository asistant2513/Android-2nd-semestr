import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  public data: string = "Here is nothing yet!";

  constructor() { }

  public getData(){
    return this.data;
  }
  
  public setData(data: string){
    this.data = data;
  }
}
