import { Injectable } from '@angular/core';
import { Band } from '../interfaces/band';
import { Observable, of } from 'rxjs';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Member } from '../interfaces/member';



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

  private members: Member[] = [
    {
      band: "Metallica",
      name:"James Hetfield",
      instrument: "Rhytm-guitar"
    },
    {
      band: "Metallica",
      name:"Lars Ulrich",
      instrument: "Drums"
    },
    {
      band: "Metallica",
      name:"Kirk Hammett",
      instrument: "Solo-guitar"
    },
    {
      band: "Metallica",
      name:"Robert Trujilo",
      instrument: "Bass"
    },
    {
      band: "Rammstein",
      name:"Till Lenderman",
      instrument: "Vocal"
    },
    {
      band: "Rammstein",
      name:"Paul Landers",
      instrument: "Rhytm-guitar "
    },
    {
      band: "Rammstein",
      name:"Christoph Schneider",
      instrument: "Drums"
    },
    {
      band: "Rammstein",
      name:"Christian Lorenz",
      instrument: "Sintezator"
    },
    {
      band: "Rammstein",
      name:"Richard Kruspe",
      instrument: "Solo-guitar"
    },
    {
      band: "Rammstein",
      name:"Oliver Riedel",
      instrument: "Bass"
    },
    {
      band: "Pantera",
      name:"Dimebag Darrell",
      instrument: "Guitar"
    },
    {
      band: "Pantera",
      name:"Vinnie Paul",
      instrument: "Drums"
    },
    {
      band: "Pantera",
      name:"Rex Brown",
      instrument: "Bass"
    },
    {
      band: "Pantera",
      name:"Phil Anselmo",
      instrument: "Vocal"
    },

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

  public getMembers(band: string){
    return of(this.members.filter(memb => {
      return memb.band === band;
    }));
  }

  public addMember(member: Member){
    this.members.push(member);
  }

  public remMember(name: string, band: string){
    console.log(name + " " + band);
    let index = this.members.findIndex(m =>{return m.name === name});
    console.log("deleting: " + index);
    this.members.splice(index, 1);
  }
}
