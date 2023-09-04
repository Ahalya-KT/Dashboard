import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-averagechart',
  templateUrl: './averagechart.component.html',
  styleUrls: ['./averagechart.component.css']
})
export class AveragechartComponent {
  
  Highcharts=Highcharts
  chartOptions={}
  constructor(){
    this.chartOptions={

        chart: {
            type: 'column'
        },
        title: {
            text: ''
        },
        xAxis: {
            categories: ['10', '20', '30', '40', '50']
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: ''
            }
        },
        series: [{
            name: 'Elements',
            data: [4, 4, 2, 4, 4]
        }, {
            name: 'Components',
            data: [0, 4, 3, 2, 3]
        }, {
            name: 'Controls',
            data: [1, 2, 2, 1, 2]
        }]
    }
      }

      
    }
  



