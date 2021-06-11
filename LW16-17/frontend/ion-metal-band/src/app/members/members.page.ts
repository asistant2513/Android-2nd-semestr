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

  public bandId: string;
  public members: any[];

  public showNew: boolean;
  public showEdit = -1;

  constructor(private memberService: MemberService,
              private route: ActivatedRoute,
              private userService: UserService) { }

  public ngOnInit() {
    this.bandId = this.route.snapshot.paramMap.get('band');
    this.memberService.getMembersOf(this.bandId).subscribe(data => this.members = data);

  }

  public add(){
    this.showNew = true;
  }

  public async addMember(member: Member){
    await this.memberService.addMember(member, this.bandId);
  }

  public async delete(id: string){
    await this.memberService.remMember(id, this.bandId);
  }

  public async updateMember(member: Member){
    await this.memberService.updateMember(member, this.bandId);
  }

  public isUserAdmin(){
    return true;
  }
}
