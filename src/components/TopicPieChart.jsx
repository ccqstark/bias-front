import React, { useState, useEffect } from 'react';
import ReactECharts from 'echarts-for-react';

export default function PieChart(props) {

    const [pieData, setPieData] = useState()

    useEffect(() => {
        setPieData(
            [
                { value: props.topicData[0], name: '无关' },
                { value: props.topicData[1], name: '无偏见' },
                { value: props.topicData[2], name: '中立' },
                { value: props.topicData[3], name: '有偏见' },
            ]
        )
    }, [props.topicData])

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
