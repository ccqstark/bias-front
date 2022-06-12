import { Table, Tag } from 'antd';
import React from 'react';

const columns = [
    {
        title: '言论内容',
        dataIndex: 'comment',
        key: 'comment',
    },
    {
        title: '标签',
        dataIndex: 'label',
        key: 'label',
        width: 200,
        render: (_, { label }) => {
            let color;
            switch(label) {
                case "无关":
                  color = "grey"
                  break;
                case "无偏见":
                  color = "green"
                  break;
                case "中立":
                    color = "blue"
                    break;
                case "有偏见":
                    color = "red"
                    break;
                default:
                    color = "blue"
              }
            return (
                <Tag color={color} key={label}>
                    {label}
                </Tag>
            )
        },
    },
];

// const test_data = [
// 	{
// 		"comment": "唐山事件让我想到了之前看过的一部纪录片 女大法官金斯伯格 再小的个体也应该被倾听和尊重 团结一心便能成就",
// 		"label": "无关"
// 	},
// 	{
// 		"comment": "发生在唐山某烧烤店的恶性伤人事件，激起了全民愤怒。唐山市11日晚召开会议强调，要从严从快依法严惩，深入开展扫黑除恶“回头看”专项行动，保持依法严厉打击高压态势，还伤者公道、还市民安宁、还社会稳定",
// 		"label": "中立"
// 	},
//     {
// 		"comment": "唐山事件让我想到了之前看过的一部纪录片 女大法官金斯伯格 再小的个体也应该被倾听和尊重 团结一心便能成就",
// 		"label": "无关"
// 	},
// 	{
// 		"comment": "发生在唐山某烧烤店的恶性伤人事件，激起了全民愤怒。唐山市11日晚召开会议强调，要从严从快依法严惩，深入开展扫黑除恶“回头看”专项行动，保持依法严厉打击高压态势，还伤者公道、还市民安宁、还社会稳定",
// 		"label": "中立"
// 	},
//     {
// 		"comment": "唐山事件让我想到了之前看过的一部纪录片 女大法官金斯伯格 再小的个体也应该被倾听和尊重 团结一心便能成就",
// 		"label": "无关"
// 	},
//     {
// 		"comment": "发生在唐山某烧烤店的恶性伤人事件，激起了全民愤怒。唐山市11日晚召开会议强调，要从严从快依法严惩，深入开展扫黑除恶“回头看”专项行动，保持依法严厉打击高压态势，还伤者公道、还市民安宁、还社会稳定",
// 		"label": "中立"
// 	},
//     {
// 		"comment": "唐山事件让我想到了之前看过的一部纪录片 女大法官金斯伯格 再小的个体也应该被倾听和尊重 团结一心便能成就",
// 		"label": "无关"
// 	},
//     {
// 		"comment": "发生在唐山某烧烤店的恶性伤人事件，激起了全民愤怒。唐山市11日晚召开会议强调，要从严从快依法严惩，深入开展扫黑除恶“回头看”专项行动，保持依法严厉打击高压态势，还伤者公道、还市民安宁、还社会稳定",
// 		"label": "中立"
// 	},
//     {
// 		"comment": "唐山事件让我想到了之前看过的一部纪录片 女大法官金斯伯格 再小的个体也应该被倾听和尊重 团结一心便能成就",
// 		"label": "无关"
// 	},
// ]

export default function DataTable(props) {
    return (
        <div>
            <Table pagination={{ pageSize: 8}} columns={columns} dataSource={props.tableData} />
            {/* <Table pagination={{ pageSize: 5}} columns={columns} dataSource={test_data} /> */}
        </div>
    )
}
