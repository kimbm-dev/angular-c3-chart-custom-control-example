import { Component, Input } from '@angular/core';
import * as c3 from 'c3';
import { ChartAPI } from 'c3';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  data = {
    columns: [
      ['data1', 10, 20, 30, 40, 50, 40, 40, 50, 50],
      ['data2', 30, 20, 1, 30, 20, 40, 20, 50, 20],
      ['data3', 3, 12, 30, 44, 21, 45, 21, 33, 34, 30]
    ]
  }

  zoom = {
    rescale: true,
  }

  axis = {
    y: {
      min: 0,
      padding: {
        top: 0,
        bottom: 0,
      },
    }
  }
  
  @Input('chart1')
  chart1: ChartAPI;

  @Input('chart2')
  chart2: ChartAPI;

  constructor(){}
  ngOnInit() {
    this.renderChart1();
    this.renderChart2();
  }

  renderChart1() {
    this.chart1 = c3.generate({
      bindto: '#chart1',
      data: this.data,
      zoom: this.zoom,
      subchart: {
        show: true,
      },
      axis: this.axis,
      size: {
        height: 500
      }
    })    
  }

  renderChart2() {
    this.chart2 = c3.generate({
      bindto: '#chart2',
      data: this.data,
      zoom: this.zoom,
      subchart: {
        show: true,
        onbrush: (d) => this.customOnBrush(d)
      },
      axis: this.axis,
      size: {
        height: 500
      }
    })
  }

  /**
   * サブチャートがonBrushするとき拡大範囲を設定する
   * @param domain x1: 左の点 ,x2: 右の点
   */
  customOnBrush(domain: Array<number>): void {
    // TODO: 拡大する範囲を計算する方法
    if (domain[1] - domain[0] < 1.1 && this.chart2) {
      this.chart2.unzoom();
    }
  }
}