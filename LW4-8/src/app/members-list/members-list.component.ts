import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MembersDataService } from '../services/members-data.service';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent implements OnInit {

  members: any[];

  constructor(private membersService: MembersDataService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
  	this.activatedRoute.params.subscribe(params=>this.getMembers(params.band));
  }

  getMembers(n: string){
  		this.membersService.getMembersOf(n).subscribe((members)=>{ this.members = members; });
  }

}
