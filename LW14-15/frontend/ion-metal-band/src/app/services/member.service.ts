import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from '../interfaces/member';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private baseUrl = "http://localhost:8080/members";

  constructor(private client: HttpClient) { }

  public getMembers(): Observable<Member[]>{
    return this.client.get<Member[]>(this.baseUrl);
  }

  public getMembersOf(bandId: number){
    var s = this.client.get<Member[]>(this.baseUrl)
    .pipe(map(
      (res: Member[]) => res.filter(el => el.band.id === bandId)
    ));
    return s;
  }

  public addMember(member: Member){
    return this.client.post(this.baseUrl, member);
  }

  public remMember(membId: number){
    return this.client.delete(this.baseUrl + "/" + membId);
  }

  public updateMember(member: Member){
    return this.client.patch(this.baseUrl, member);
  }

  public getMemberById(id: number): Observable<Member>{
    return this.client.get<Member>(this.baseUrl + "/" + id);
  }
}
