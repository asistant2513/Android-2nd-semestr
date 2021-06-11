import { Injectable } from '@angular/core';
import { Member } from '../interfaces/member';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private baseUrl = "http://localhost:8080/members";

  constructor(private readonly afs: AngularFirestore) { }

  public getMembers(){
    //return this.client.get<Member[]>(this.baseUrl);
  }

  public getMembersOf(bandId){
    return this.afs.doc("bands/" + bandId).collection("members").snapshotChanges().pipe(map(
      actions => actions.map(a =>{
        const d = a.payload.doc.data();
        const id =a.payload.doc.id;
        return {id, ...(d as object)};
      })
    ));
  }

  public addMember(member, bandId: string){
    return this.afs.doc("bands/" +bandId).collection("members").add(member);
  }

  public remMember(memberId: string, bandId:string){
    return this.afs.doc("bands/" + bandId + "/members/" + memberId).delete();
  }

  public updateMember(member: Member, bandId: string){
    return this.afs.doc("bands/" + bandId + "/members/" + member.id).update({
      name: member.name,
      instrument: member.instrument
    });
  }
}
