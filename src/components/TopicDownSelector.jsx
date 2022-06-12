import { Select } from 'antd';
import React from 'react';
import axios from 'axios';

const { Option } = Select;

export default function DownSelector(props) {
    const handleChange = (value) => {
        axios.get('/topic', {
            params: {
                topic: value
            },
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            }
        })
            .then(res => {
                // console.log(res.data);
                props.setTopicData(res.data)
            })
    }
    return (
        <div>
            <Select
                defaultValue="大家对潮汕人的印象是什么？"
                style={{
                    width: 380,
                }}
                onChange={handleChange}
            >
                <Option value="大家对潮汕人的印象是什么？">大家对潮汕人的印象是什么？</Option>
                <Option value="怕因生孩子而耽误事业的女性，她们的事业有多好？">怕因生孩子而耽误事业的女性，她们的事业有多好？</Option>
                <Option value="现今中国人的种族歧视严重吗？">现今中国人的种族歧视严重吗？</Option>
            </Select>
        </div>
    )
}