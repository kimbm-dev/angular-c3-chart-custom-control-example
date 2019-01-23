import { Component, Input } from '@angular/core';
import * as c3 from 'c3';
import { ChartAPI } from 'c3';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
   
  @Input('chart1')
  chart1: ChartAPI;

  @Input('chart2')
  chart2: ChartAPI;

  constructor(){}
  ngOnInit() {
    this.renderChart1();
    this.renderChart2();
  }

  renderChart2() {
    this.chart2 = c3.generate({
      bindto: '#chart2',
      data: {
        columns: [
          ['data1', 10, 20, 30, 40, 50, 40, 40, 50, 50],
          ['data2', 30, 20, 1, 30, 20, 40, 20, 50, 20],
          ['data3', 3, 12, 30, 44, 21, 45, 21, 33, 34, 30]
        ],
      },
      zoom: {
        rescale: true,
        extent: [2, 50],
      },
      subchart: {
        show: true,
        onbrush: (d) => {
          if (d[1] - d[0] < 2 && this.chart2) {
            this.chart2.unzoom();
          }else {
            //
          }
        }
      }
      ,axis: {
        y: {
          min: 0,
          padding: {
            top: 0,
            bottom: 0,
          },
        }
      }
      ,
      size: {
        width: 500,
        height: 500
      },
    })    
  }

  renderChart1() {
    this.chart1 = c3.generate({
      bindto: '#chart1',
      data: {
        columns: [
          ['data1', 10, 20, 30, 40, 50, 40, 40, 50, 50],
          ['data2', 30, 20, 1, 30, 20, 40, 20, 50, 20],
          ['data3', 3, 12, 30, 44, 21, 45, 21, 33, 34, 30]
        ],
      },
      zoom: {
        rescale: true,
        extent: [2, 50],
      },
      subchart: {
        show: true,
        onbrush: (d) => {
          if (d[1] - d[0] < 2) {
            
          }else {
            //
          }
        }
      }
      ,axis: {
        y: {
          min: 0,
          padding: {
            top: 0,
            bottom: 0,
          },
        }
      }
      ,
      size: {
        width: 500,
        height: 500
      },
    })    
  }
}