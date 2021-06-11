import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Band } from 'src/app/interfaces/band';
import { Member } from 'src/app/interfaces/member';
import { BandService } from 'src/app/services/band.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss'],
})
export class MemberComponent implements OnInit {

  @Input() member;
  @Input() isNew: boolean;
  @Output() addMember = new EventEmitter();
  @Output() cancelAddingMember = new EventEmitter();
  @Output() editMember = new EventEmitter();
  
  title: string;
  public band: string;

  constructor(private route: ActivatedRoute, private bandService: BandService) { }

   ngOnInit() {
    if(this.isNew){
      this.member = {
        name: '',
        instrument: ''
      };
      console.log(this.member);
      this.title = 'New band member';
    }
  }

  public async addNew(){
    this.band = this.route.snapshot.paramMap.get('band');
    this.member.band = this.band;
    if(this.isNew){
      this.addMember.emit(this.member);
    }
  }

  public async edit(){
    this.editMember.emit(this.member);
  }

  public cancelAdding(){
    if(this.isNew){
      this.cancelAddingMember.emit();
    }
  }

}
