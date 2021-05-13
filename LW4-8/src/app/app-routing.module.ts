import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandListComponent } from './band-list/band-list.component';
import { MembersListComponent } from './members-list/members-list.component';



const routes: Routes = [
  {path: 'bands', component: BandListComponent},
  {path: 'members/:band', component: MembersListComponent},
  {path: '', redirectTo: 'bands', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
