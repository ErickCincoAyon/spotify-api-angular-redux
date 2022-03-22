import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./authorized/authorized.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _authService: AuthService,
  ) { }

  ngOnInit(): void { 
    this._route.queryParams.subscribe(({ login }) => {
      ( login ) && this.login();
    })
  }

  login(): void {
    this._authService.getCode();
  }

  goSpotify(): void {
    window.open( 'https://www.spotify.com/', '_blank' );
  }

}
