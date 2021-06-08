import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../service/shared-data.service';

@Component({
  selector: 'app-data-sender',
  templateUrl: './data-sender.page.html',
  styleUrls: ['./data-sender.page.scss'],
})
export class DataSenderPage implements OnInit {

  public textData: string;

  constructor(private data: SharedDataService) { }

  ngOnInit() {
  }

  public passData(){
    console.log(this.textData);
    this.data.setData(this.textData);
  }

}
