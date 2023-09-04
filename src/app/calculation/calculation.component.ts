import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calculation',
  templateUrl: './calculation.component.html',
  styleUrls: ['./calculation.component.css']
})
export class CalculationComponent {
   
  @Input()  heading:string=""
  @Input()  about:string=""
  @Input()  icon:string=""
  @Input()  text1:string=""

  @Input()  about2:string=""
  @Input()  icon1:string=""
  @Input()  text2:string=""

  @Input()  about3:string=""
  @Input()  icon2:string=""
  @Input()  text3:string=""
  

}
