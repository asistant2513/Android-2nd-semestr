import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from '../interfaces/member';
import { MemberService } from '../services/member.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {

  public bandId: number;
  public members: Member[];

  public showNew: boolean;
  public showEdit = -1;

  constructor(private memberService: MemberService,
              private route: ActivatedRoute,
              private userService: UserService) { }

  public async ngOnInit() {
    this.bandId = +this.route.snapshot.paramMap.get('band');
    this.members = await this.memberService.getMembersOf(this.bandId).toPromise();
  }

  public add(){
    this.showNew = true;
  }

  public addMember(member: Member){
    this.memberService.addMember(member).subscribe(res => this.memberService.getMembersOf(this.bandId).subscribe(data => this.members = data));
  }

  public delete(id: number){
    this.memberService.remMember(id).subscribe(res => this.memberService.getMembersOf(this.bandId).subscribe(data => this.members = data));
  }

  public updateMember(member: Member){
    this.memberService.addMember(member).subscribe(res => this.memberService.getMembersOf(this.bandId).subscribe(data => this.members = data));
  }

  public isUserAdmin(){
    return this.userService.getUser().role == 'admin';
  }
}
