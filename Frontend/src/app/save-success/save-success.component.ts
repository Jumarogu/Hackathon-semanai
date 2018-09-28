import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../services/data.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-save-success',
  templateUrl: './save-success.component.html',
  styleUrls: ['./save-success.component.css']
})
export class SaveSuccessComponent implements OnInit {

  private playlistCode;
  private access_token;
  private user_info;

  constructor(route: ActivatedRoute, private cookieService: CookieService, private dataService: DataService) { 
    this.playlistCode = this.cookieService.get('playlistCode');
    this.cookieService.deleteAll();
  }

  ngOnInit() {
  }

}
