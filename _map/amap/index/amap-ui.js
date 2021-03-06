import React from 'react';
import ReactDOM from 'react-dom';

import { Map } from 'react-amap';
import {CONSTANTS} from "../circle/circle-editor";

class UIMarker extends React.Component {

  constructor() {
    super();
    this.loadUI();
  }

  loadUI() {
    window.AMapUI.loadUI(['overlay/SimpleMarker'], (SimpleMarker) => {
      this.initPage(SimpleMarker);
    })
  }

  initPage(SimpleMarker) {
    const map = this.props.__map__;

    // 这个例子来自官方文档 http://lbs.amap.com/api/javascript-api/guide/amap-ui/intro
    new SimpleMarker({
      //前景文字
      iconLabel: 'A',
      //图标主题
      iconTheme: 'default',
      //背景图标样式
      iconStyle: 'red',
      //...其他Marker选项...，不包括content
      map: map,
      position: [120, 31]
    });

    //创建SimpleMarker实例
    new SimpleMarker({
      //前景文字
      iconLabel: {
        innerHTML: '<i>B</i>', //设置文字内容
        style: {
          color: '#fff' //设置文字颜色
        }
      },
      //图标主题
      iconTheme: 'fresh',
      //背景图标样式
      iconStyle: 'black',
      //...其他Marker选项...，不包括content
      map: map,
      position: [120, 29]
    });
  }

  // ??
  render() {
    return null;
  }
}

function App  () {
  return (<div style={{width: '100%', height: '400px'}}>
    <Map
      amapkey={CONSTANTS.AMAP_KEY}
      zoom={6}
      center={[120, 30]}
      useAMapUI >

      <UIMarker/>
    </Map>
  </div>)
}


ReactDOM.render(
    <App />,
  document.querySelector('#root')
)
