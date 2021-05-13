import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BandComponent } from './band/band.component';
import { BandListComponent } from './band-list/band-list.component';
import { MembersListComponent } from './members-list/members-list.component';
import { NewBandComponent } from './new-band/new-band.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { MemberComponent } from './member/member.component';


@NgModule({
  declarations: [
    AppComponent,
    BandComponent,
    BandListComponent,
    MembersListComponent,
    NewBandComponent,
    NewMemberComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
