import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MembersDataService } from '../services/members-data.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  @Output() removeMember = new EventEmitter();
  @Input() member;
  @Input() memberName;

  showInfo = false;

  constructor(private memberService : MembersDataService) { }

  ngOnInit(): void {
  }

  remMember() {
  	this.memberService.deleteMember(this.memberName);
  }

}
