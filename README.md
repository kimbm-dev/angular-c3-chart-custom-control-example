# angular-c3-chart-custom-control-example

## サブチャートから拡大するとき挙動をカスタムする

- subchartから横軸に範囲を選択するとき、選択された横軸に含まれているデータが2点以上の場合
  - チャートを拡大する

## 実装

- subchartのonbrushを実装する

```javascript
chart = c3.generate({
    subchart: {
    show: true
    onbrush: (domain: Array<Date>) => this.customOnBrush(domain)
 });
 
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
```

## feature

[] 範囲指定するときsubchartが選択されてないように見えることをなんとかしたい
```
 chart.unzoom() < -- こいつのせい
 
```
