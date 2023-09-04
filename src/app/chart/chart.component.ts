import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
   @Input()   title:string=""
   @Input()   title2:string=""
   @Input()    title3:string=""
   @Input()    title4:string=""
   @Input()     title5:string=""

}
