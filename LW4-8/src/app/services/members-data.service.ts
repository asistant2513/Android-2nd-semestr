import { Injectable } from '@angular/core';
import {Observable} from 'rxjs-compat/Observable';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MembersDataService {

  private members = [
    {
      band: "Metallica",
      name:"James Hetfield"
    },
    {
      band: "Metallica",
      name:"Lars Ulrich"
    },
    {
      band: "Metallica",
      name:"Kirk Hammett"
    },
    {
      band: "Metallica",
      name:"Robert Trujilo"
    },
    {
      band: "Rammstein",
      name:"Till Lenderman"
    },
    {
      band: "Rammstein",
      name:"Paul Landers"
    },
    {
      band: "Rammstein",
      name:"Christoph Schneider"
    },
    {
      band: "Rammstein",
      name:"Christian Lorenz"
    },
    {
      band: "Rammstein",
      name:"Richard Kruspe"
    },
    {
      band: "Rammstein",
      name:"Oliver Riedel"
    },
    {
      band: "Pantera",
      name:"Dimebag Darrell"
    },
    {
      band: "Pantera",
      name:"Vinnie Paul"
    },
    {
      band: "Pantera",
      name:"Terry Glaze"
    },
    {
      band: "Pantera",
      name:"Rex Brown"
    },
    {
      band: "Pantera",
      name:"Phil Anselmo"
    },

  ];

  constructor() { }

  getMembersOf(bandName: string): Observable<any[]> {
  	return of(this.members.filter(elem=>{return elem.band === bandName}));
  }

  addMember(band){
    this.members.push(band);
  }
  deleteMember(index){
    this.members.splice(index,1);
  }
}
