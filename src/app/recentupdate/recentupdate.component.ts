import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recentupdate',
  templateUrl: './recentupdate.component.html',
  styleUrls: ['./recentupdate.component.css']
})
export class RecentupdateComponent {
  
  @Input()    heading:string=""
  @Input()    description:string=""
  @Input()    date:string=""

}
