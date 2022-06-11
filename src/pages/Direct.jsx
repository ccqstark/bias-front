import React from 'react'
import TextForm from '../components/TextForm'
import DataTable from '../components/DataTable'
import PieChart from '../components/PieChart'
import './Pages.css'
import { Divider } from 'antd';

export default function Direct() {
    return (
        <div>
            <TextForm />
            <Divider>数据表格</Divider>
            <DataTable />
            <Divider>统计饼图</Divider>
            <PieChart />
        </div>
    )
}
