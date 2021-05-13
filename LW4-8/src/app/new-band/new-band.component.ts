import { Component, OnInit } from '@angular/core';
import { BandServiceService } from '../services/band-service.service';

@Component({
  selector: 'app-new-band',
  templateUrl: './new-band.component.html',
  styleUrls: ['./new-band.component.scss']
})
export class NewBandComponent implements OnInit {

  showForm = false;

  constructor(private bandService: BandServiceService) { }

  ngOnInit(){
  }

  onSubmit(myForm) {
  	const fields = myForm.form.controls;
  	this.showForm = false;
  	this.bandService.addBand(
      {
        name: fields.name.value,
  	    country: fields.country.value, 
        genre: fields.genre.value,
        creation_year: fields.creation_year.value
      });
  }

}
