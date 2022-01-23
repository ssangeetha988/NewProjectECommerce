import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {  cols: 1, rows: 1, image :'assets/Group 772539396.png' },
          {  cols: 1, rows: 1, image :'assets/Group 772539397.png' },
          {  cols: 1, rows: 1, image :'assets/Group 772539398.png' },
          {  cols: 1, rows: 1, image :'assets/Group 772539399.png' },
          {  cols: 1, rows: 1, image :'assets/Group 772539403.png' },
          {  cols: 1, rows: 1, image :'assets/Group 772539404.png' },
          {  cols: 1, rows: 1, image :'assets/Group 772539405.png' },
          {  cols: 1, rows: 1, image :'assets/Group 772539408.png' }
        ];
      }

      return [
        { cols: 1, rows: 1, image :'assets/Group 772539396.png' },
        {  cols: 1, rows: 1, image :'assets/Group 772539397.png' },
        {  cols: 1, rows: 1, image :'assets/Group 772539398.png'  },
        { cols: 1, rows: 1, image :'assets/Group 772539399.png' },
        {  cols: 1, rows: 1, image :'assets/Group 772539403.png' },
        {  cols: 1, rows: 1, image :'assets/Group 772539404.png' },
        { cols: 1, rows: 1, image :'assets/Group 772539405.png' },
        { cols: 1, rows: 1, image :'assets/Group 772539408.png' }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
