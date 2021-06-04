import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Member } from '../interfaces/member';
import { DataGetterService } from '../service/data-getter.service';
import { SharedDataService } from '../service/shared-data.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.page.html',
  styleUrls: ['./members.page.scss'],
})
export class MembersPage implements OnInit {

  public bandName: string;
  public members: Member[];

  public showNew: boolean;
  public showEdit = -1;

  constructor(private data: DataGetterService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.bandName = this.route.snapshot.paramMap.get('band');
    this.data.getMembers(this.bandName).subscribe((membs) => this.members = membs);
    this.updateData();
  }

  public add(){
    this.showNew = true;
  }

  public addMember(member: Member){
    this.data.addMember(member);
    this.updateData();
  }

  public delete(name: string){
    this.data.remMember(name, this.bandName);
    this.updateData();
  }

  private updateData(): void{
    this.data.getMembers(this.bandName).subscribe((membs) => this.members = membs);
  }

}
