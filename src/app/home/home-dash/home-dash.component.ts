import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Appliance } from '../model/appliance';

@Component({
  selector: 'app-home-dash',
  templateUrl: './home-dash.component.html',
  styleUrls: ['./home-dash.component.css']
})
export class HomeDashComponent {
  constructor(private breakpointObserver: BreakpointObserver) {}
   APPLIANCES: Appliance[] = [
     {name: "Left Washer", status: "inUse", timeRemaining: 3},
     {name: "Right Washer", status: "inUse", timeRemaining: 12},
     {name: "Left Dryer", status: "inUse", timeRemaining: 42},
     {name: "Right Dryer", status: "available", timeRemaining: null}

   ]
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Left Washer', cols: 2, rows: 2 },
          { title: 'Right Washer', cols: 2, rows: 2 },
          { title: 'Left Dryer', cols: 2, rows: 2 },
          { title: 'Right Dryer', cols: 2, rows: 2 }
        ];
      }
      return [
        { title: 'Left Dryer', cols: 2, rows: 2 },
        { title: 'Right Dryer', cols: 2, rows: 2 },
        { title: 'Left Washer', cols: 2, rows: 2 },
        { title: 'Right Dryer', cols: 2, rows: 2 }
      ];
    })
  );

}
