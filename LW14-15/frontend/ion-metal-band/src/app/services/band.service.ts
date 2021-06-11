import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Band } from '../interfaces/band';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BandService {

  private baseUrl = "http://localhost:8080/bands";

  constructor(private client: HttpClient) { }

  public getBands(): Observable<Band[]>{
    return this.client.get<Band[]>(this.baseUrl);
  }

  public addBand(band: Band){
    return this.client.post(this.baseUrl, band);
  }

  public remBand(bandId: number){
    return this.client.delete(this.baseUrl + "/" + bandId);
  }

  public updateBand(band: Band){
    return this.client.patch(this.baseUrl, band);
  }

  public getBandById(id: number): Observable<Band>{
    return this.client.get<Band>(this.baseUrl + "/" + id);
  }
}
