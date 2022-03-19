import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimateService {

  constructor() { }
  
  menuMovilAnimate( element: any, action: string ) {
    if( action === 'show' ) {
      element.animate([
          { marginLeft: '-100%' },
          { marginLeft: '0%' }
      ], {
          duration: 300,
          easing: 'ease-in-out',
          iterations: 1,
          direction: 'alternate',
          fill: 'forwards'
      });
    } else if ( action === 'hide' ) {
        element.animate([
          { marginLeft: '0%' },
          { marginLeft: '-100%' }
        ], {
          duration: 300,
          easing: 'ease-in-out',
          iterations: 1,
          direction: 'alternate',
          fill: 'forwards'
        });
    }
  }
}
