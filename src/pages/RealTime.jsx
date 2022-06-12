import React from 'react'
import DownSelector from '../components/DownSelector'
import BarChart from '../components/BarChart'
import { Divider } from 'antd';

export default function RealTime() {
  return (
    <div>
        <span>选择话题：<DownSelector /></span>
        <Divider>柱状统计图</Divider>
        <BarChart />
    </div>
  )
}
