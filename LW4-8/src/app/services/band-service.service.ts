import { Injectable } from '@angular/core';
import {Observable} from 'rxjs-compat/Observable';

@Injectable({
  providedIn: 'root'
})
export class BandServiceService {

  private bands = [
    {
      name: "Metallica",
      country: "USA",
      genre: "Trash metal",
      creation_year: 1981
    },
    {
      name: "Rammstein",
      country: "Germany",
      genre: "Industrial metal",
      creation_year: 1994
    },
    {
      name: "Pantera",
      country: "USA",
      genre: "Heavy metal",
      creation_year: 1981
    }
  ];

  getBands(): Observable<any[]> {
  	return new Observable<any[]>(subscriber=>{subscriber.next(this.bands);
  	subscriber.complete();});
  }

  addBand(band){
    this.bands.push(band);
  }
  deleteBand(index){
    this.bands.splice(index,1);
  }

  constructor() { }
}
