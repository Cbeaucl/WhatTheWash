import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home-dash',
  templateUrl: './home-dash.component.html',
  styleUrls: ['./home-dash.component.css']
})
export class HomeDashComponent {
  /** Based on the screen size, switch from standard to one column per row */
  width = "50%"
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        this.width = '100%'
        return [
          { title: 'Left Washer', cols: 2, rows: 2 },
          { title: 'Right Washer', cols: 2, rows: 2 },
          { title: 'Left Dryer', cols: 2, rows: 2 },
          { title: 'Right Dryer', cols: 2, rows: 2 }
        ];
      }
      this.width = "50%"
      return [
        { title: 'Left Dryer', cols: 2, rows: 2 },
        { title: 'Right Dryer', cols: 2, rows: 2 },
        { title: 'Left Washer', cols: 2, rows: 2 },
        { title: 'Right Dryer', cols: 2, rows: 2 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
