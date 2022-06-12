import React, { useState } from 'react'
import DataTable from '../components/DataTable'
import DownSelector from '../components/CateDownSelector'
import PieChart from '../components/SearchPieChart'
import Searcher from '../components/Searcher'
import { Divider } from 'antd';
import Imager from '../components/Imager'

export default function Search() {

    const [searchData, setSearchData] = useState({
        table_data: [],
        pie_data: [],
        word_cloud: '',
    });

    const [cate, setCate] = useState('性别')

    return (
        <div>
            <div style={{
                display: "flex",
            }}>
                <span style={{
                    lineHeight: "32px",
                    marginRight: "15px"
                }}>主题选择:</span>
                <DownSelector setCate={setCate}/>
                <div style={{
                    marginLeft: "200px"
                }}>
                    <Searcher cate={cate} setSearchData={setSearchData}/>
                </div>
            </div>
            <Divider>数据展示区</Divider>

            <div style={{
                display: "flex",
                justifyContent: "space-around"
            }}>
                <div style={{
                    width: "50%"
                }}>
                    <DataTable tableData={searchData.table_data}/>
                </div>

                <div style={{
                    width: "50%"
                }}>
                    <PieChart searchPieData={searchData.pie_data}/>
                    <Divider>词云图</Divider>
                    <div style={{
                        textAlign: "center",
                    }}>
                        <Imager url={searchData.word_cloud}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
