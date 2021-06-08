import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Member } from 'src/app/interfaces/member';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})
export class MemberComponent implements OnInit {

  @Input() member: Member;
  @Input() isNew: boolean;
  @Output() addMember = new EventEmitter();
  @Output() cancelAddingMember = new EventEmitter();
  title: string;
  public band: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.band = this.route.snapshot.paramMap.get('band');
    if(this.isNew){
      this.member = {
        band: this.band,
        name: '',
        instrument: ''
      };
      this.title = 'New band member';
    }
  }

  public addNew(){
    if(this.isNew){
      this.addMember.emit(this.member);
    }
  }

  public cancelAdding(){
    if(this.isNew){
      this.cancelAddingMember.emit();
    }
  }

}
