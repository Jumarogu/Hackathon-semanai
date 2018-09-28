import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService } from '../services/data.service'

@Component({
  selector: 'app-show-code',
  templateUrl: './show-code.component.html',
  styleUrls: ['./show-code.component.css']
})
export class ShowCodeComponent implements OnInit {

  private access_token;
  private playlist_info;
  private client_id = 'be2a413e2bbd402db45432d7ccdf0199';
  private scope = 'user-top-read';

  constructor(route: ActivatedRoute, private dataService: DataService) { 
    let fragment = route.snapshot.fragment;
    
    if(fragment != null) {

      let response = fragment.split('&');
      response = response[0].split('=');

      if(response[0] === 'access_token'){

        this.access_token = response[1];
        console.log(this.access_token);
        this.dataService.createPlaylist(this.access_token).subscribe(response => {
          
          this.playlist_info = response;
          console.log(this.playlist_info);
          
        });
      }
    }
  }

  ngOnInit() {

  }

}
