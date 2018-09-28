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

  constructor(private dataService: DataService) {
    
   }

  ngOnInit() {

  }

  redirect() {
    console.log('hiii');
    
    var params = {
      client_id: this.client_id,
      redirect_uri: 'http://localhost:4200/show-code',
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
