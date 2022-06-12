import React, { useState } from 'react'
import TextForm from '../components/TextForm'
import DataTable from '../components/DataTable'
import PieChart from '../components/PieChart'
import './Pages.css'
import { Divider } from 'antd';

export default function Direct() {

    const [predictData, setPredictData] = useState();

    return (
        <div>
            <TextForm setPredictData={setPredictData}/>
            <Divider>数据表格</Divider>
            <DataTable predictData={predictData}/>
            <Divider >统计饼图</Divider>
            <PieChart predictData={predictData}/>
        </div>
    )
}
