import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {DataService } from '../services/data.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  private access_token;
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
          console.log(response);
        });
      }
    }
   }

  ngOnInit() {

  }

  redirect() {
    console.log('hiii');
    
    var params = {
      client_id: this.client_id,
      redirect_uri: 'http://localhost:4200/create',
      scope: this.scope || '',
      response_type: 'token'
    };
    var authCompleted = false;
    var authUrl = 'https://accounts.spotify.com/authorize?' + this.toQueryString(params);
    window.location.href = authUrl;
  }

  private toQueryString(obj: Object): string {
    var parts = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
      }
    };
    return parts.join('&');
  };


}
