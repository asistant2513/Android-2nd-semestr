import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Band } from '../interfaces/band';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BandService {

  constructor(private readonly afs: AngularFirestore) { }

  public getBands(): Observable<any[]>{
     return this.afs.collection('bands').snapshotChanges().pipe(map(actions => actions.map(a => {
      const d = a.payload.doc.data();
      const id =a.payload.doc.id;
      return {id, ...(d as object)};
    })));
  }

  public addBand(band){
    return this.afs.collection("bands").add(band);
  }

  public remBand(bandId: string){
    return this.afs.doc("bands/"+ bandId).delete();
  }

  public updateBand(band: Band){
   return this.afs.doc("bands/"+band.id).update({
     name: band.name,
     country: band.country,
     genre: band.genre,
     year: band.year
   });
  }
}
