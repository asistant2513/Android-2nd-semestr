import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { BandServiceService } from '../services/band-service.service';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.scss']
})
export class BandComponent implements OnInit {

  @Output() removeBand = new EventEmitter();
  @Input() band;
  @Input() bandName;
  
  showInfo = false;  
 
  constructor(private bandSevice: BandServiceService) { }

  ngOnInit(): void {

  }
  remBand() {
  	this.bandSevice.deleteBand(this.bandName);
  }

}
