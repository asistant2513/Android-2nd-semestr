import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Band } from 'src/app/interfaces/band';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.scss'],
})
export class BandComponent implements OnInit {

  @Input() band: Band;
  @Input() isNew: boolean;
  @Output() addBand = new EventEmitter();
  @Output() cancelAddingBand = new EventEmitter();
  title: string;

  constructor() { }

  public ngOnInit() {
    if(this.isNew){
      this.band = {
        name: '',
        country: '',
        genre: '',
        year: null
      };
      this.title = "New Band";
    }
  }

  public addNew(){
    if(this.isNew){
      this.addBand.emit(this.band);
    }
  }

  public cancelAdding(){
    if(this.isNew){
      this.cancelAddingBand.emit();
    }
  }

}
