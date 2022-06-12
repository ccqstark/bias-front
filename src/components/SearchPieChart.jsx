import React, { useState, useEffect, useRef } from 'react';
import ReactECharts from 'echarts-for-react';

export default function PieChart(props) {

    const [pieData, setPieData] = useState(
        [
            { value: 25, name: '无关' },
            { value: 25, name: '无偏见' },
            { value: 25, name: '中立' },
            { value: 25, name: '有偏见' },
        ]
    )

    // 记录是否是首次加载页面
    const firstUpload = useRef(true)
    useEffect(() => {
        if (firstUpload.current) {
            firstUpload.current = false
            return
        }
        setPieData(
            [
                { value: props.searchPieData[0], name: '无关' },
                { value: props.searchPieData[1], name: '无偏见' },
                { value: props.searchPieData[2], name: '中立' },
                { value: props.searchPieData[3], name: '有偏见' },
            ]
        )
    }, [props.searchPieData])

    const option = {
        title: {
            text: '关于话题的社会偏见倾向统计',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['无关', '无偏见', '中立', '有偏见']
        },
        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: pieData,
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    function onChartReady(echarts) {
        // console.log('echarts is ready', echarts);
    }

    function onChartLegendselectchanged(param, echarts) {
        // console.log(param, echarts);
    };

    return (
        <div>
            <ReactECharts
                option={option}
                style={{ height: 400 }}
                onChartReady={onChartReady}
                onEvents={{
                    'legendselectchanged': onChartLegendselectchanged
                }}
            />
        </div>
    );
};
