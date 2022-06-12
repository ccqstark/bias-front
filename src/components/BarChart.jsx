import React from 'react';
import ReactECharts from 'echarts-for-react';

export default function BarChart(props) {
    const option = {
        title: {
            text: '不同观点数量柱状图'
        },
        tooltip: {},
        legend: {
            data: ['数量']
        },
        xAxis: {
            data: ['无关', '无偏见', '中立', '有偏见']
        },
        yAxis: {},
        series: [{
            name: '数量',
            type: 'bar',
            data: props.topicData
        }]
    };

    return <ReactECharts
        option={option}
        style={{ height: 400 }}
        opts={{ renderer: 'svg' }}
    />;
};
