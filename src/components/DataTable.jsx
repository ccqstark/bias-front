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

export default function DataTable(props) {
    return (
        <div>
            <Table columns={columns} dataSource={props.predictData} />
        </div>
    )
}
