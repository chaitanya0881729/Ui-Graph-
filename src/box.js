import React, { useEffect } from 'react';
import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

function Boxs() {
  useEffect(() => {
    var chartDom = document.getElementById('main');
    var myChart = echarts.init(chartDom);

    var option = {
      xAxis: {
        type: 'category',
        data: ['0', '166', '332', '498', '684', '830', '996'],
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value}%', 
        },
      },
      series: [
        {
          data: [150,55, 230, 224, 218, 135, 147, 260],
          type: 'line',
          itemStyle: {
            color: '#7D82F0', 
          },

          emphasis: {
            focus: 'series', 
            scale: true, 
            label: {
              show: true,
              position: "top", 
              color: 'white',
              backgroundColor: '#100F4B', 
              padding: [20, 40],
              shadowBlur: 4, 
              shadowColor: 'rgba(0, 0, 0, 0.16)', 
              shadowOffsetX: 0, 
              shadowOffsetY: 1, 
              borderRadius: 7,
              fontSize: 16,
              
              
            },
          },
          tooltip: {
            show: true,
          },





        },

        
        
      ],
    };

    myChart.setOption(option);

    
    return () => {
      myChart.dispose();
    };
  }, []);

  return (
    <div className="">
      <div id="main" style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
}

export default Boxs;
