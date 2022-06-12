import { Select } from 'antd';
import React from 'react';

const { Option } = Select;

export default function DownSelector(props) {
    const handleChange = (value) => {
        props.setCate(value)
    }
    return (
        <div>
            <Select
                defaultValue="性别"
                style={{
                    width: 150,
                }}
                onChange={handleChange}
            >
                <Option value="性别">性别</Option>
                <Option value="种族文化">种族文化</Option>
                <Option value="地域">地域</Option>
            </Select>
        </div>
    )
}