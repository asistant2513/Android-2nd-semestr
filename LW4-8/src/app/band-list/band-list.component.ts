import { Component, OnInit } from '@angular/core';
import { BandServiceService } from '../services/band-service.service';

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.scss']
})
export class BandListComponent implements OnInit {

  bands: any[];
  constructor(private movieService: BandServiceService){
    movieService.getBands().subscribe((bands) => this.bands = bands);
  }

  ngOnInit(): void {
  }

}
