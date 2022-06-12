import React, { useState } from 'react'
import DownSelector from '../components/TopicDownSelector'
import BarChart from '../components/BarChart'
import { Divider } from 'antd';
import PieChart from '../components/TopicPieChart';

export default function RealTime() {

  const [topicData, setTopicData] = useState([28, 5, 18, 63]);

  return (
    <div>
      <span>选择话题：<DownSelector setTopicData={setTopicData} /></span>
      <Divider>柱状统计图</Divider>
      <BarChart topicData={topicData} />
      <Divider>饼图</Divider>
      <PieChart topicData={topicData} />
    </div>
  )
}
