import { Injectable } from '@angular/core';
import { Band } from '../interfaces/band';
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class DataGetterService {

  private bands : Band[] = [
    {
      name: "Metallica",
      country: "USA",
      genre: "Trash metal",
      year: 1981
    },
    {
      name: "Rammstein",
      country: "Germany",
      genre: "Industrial metal",
      year: 1991
    },
    {
      name: "Black Sabbath",
      country: "UK",
      genre: "Black metal",
      year: 1968
    }
  ];

  private username: string = '';

  private users = [
    'Admin', 'User1', 'User2'
  ];

  constructor() { }

  public getBands(): Observable<Band[]>{
    return of(this.bands);
  }

  public addBand(band: Band){
    this.bands.push(band);
  }

  public remBand(index: number){
    this.bands.splice(index, 1);
    
    console.log(this.bands);
  }

  public getUser(){
    return this.username;
  }

  public setUser(user: string){
    this.username = user;
  }

  public isUserExists(name: string){
    return this.users.indexOf(name) !== -1;
  }
}
