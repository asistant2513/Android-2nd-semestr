import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.page.html',
  styleUrls: ['./http-test.page.scss'],
})
export class HttpTestPage implements OnInit {

  constructor(private http: HttpClient) { }

  posts: any[];

  postCount = 0;
  postStep = 10;

  ngOnInit() {
  }

  getData(){
    this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(map(
          (res : any[]) => res.filter(row => row.id < 10)
        )
      ).subscribe(data => {
        this.posts = data;
        console.log(data);
        }
    );
    console.log(this.posts);
  }

  addData(refresher){
    this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(map(
          (res : any[]) => res.filter(row => row.id > this.postCount && row.id < this.postCount + this.postStep)
        )
      ).subscribe(data => {
        this.posts = this.posts.concat(data);
        if(refresher){
          refresher.target.complete();
        }
        this.postCount += 10;
        }
    );
  }

  refreshData(refresher){
    this.posts = [];
    this.postCount = 0;
    this.addData(refresher);
  }

}
