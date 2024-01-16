import React, { useEffect } from 'react';
import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';

import Boxs from './box.js';

import Box from '@mui/material/Box';
import './App.css';



echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

function App() {


  return (
    <div className="App">
      <Box className="newbox" sx={{width:'50%', height:"500px",  backgroundColor:"#FFFFFF", boxShadow: 'rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px', borderRadius:"2rem" }}>
      <div className='box1' >
        <div className='text'>
          <p className='p1'>Impressions</p>
          <p className='p2'>383</p>
        </div>
        <div className='text'>
          <p className='p1'>Click-through rate</p>
          <p className='p2'>9.1%</p>
        </div>
        <div className='text'>
          <p className='p1'>views</p>
          <p className='p2'>97</p>
        </div>
        <div className='text'>
          <p className='p1'>Unique viewers</p>
          <p className='p2'>54</p>
        </div>
      </div>
      <Boxs/>
      </Box>
      
    </div>
  );
}

export default App;
