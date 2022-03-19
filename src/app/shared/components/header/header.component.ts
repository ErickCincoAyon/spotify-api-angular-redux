import { Component, OnInit } from '@angular/core';
import { AnimateService } from '../../services/animate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isOpenSidebar: boolean = false;

  constructor(
    private readonly _animateService: AnimateService,
  ) { }

  ngOnInit(): void {
  }

  toggleSidebarMovil( open: boolean ): void {
    this.isOpenSidebar = open;
    let menuMovil = document.querySelector('#menu-movil');
    ( this.isOpenSidebar ) ?
      this._animateService.menuMovilAnimate( menuMovil, 'show' ) : this._animateService.menuMovilAnimate( menuMovil, 'hide' );
  }

  closeSidebarHandler( event: boolean ): void {
    this.toggleSidebarMovil( event );
  }

}
