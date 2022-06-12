import { Input, Space } from 'antd';
import React, { useState } from 'react';
import axios from 'axios';

const { Search } = Input;

export default function App(props) {

    const [loadingState, setLoadingState] = useState(false)

    const onSearch = (value) => {
        setLoadingState(true)
        axios.get('/search', {
            params: {
                cate: props.cate,
                keyword: value,
            },
            headers: {
                "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
            }
        })
            .then(res => {
                // console.log(res.data);
                props.setSearchData(res.data)
                setLoadingState(false)
            })
    };
    return (
        <Space direction="vertical">
            <Search
                placeholder="输入关键词"
                enterButton="Search"
                size="large"
                onSearch={onSearch}
                loading={loadingState}
            />
        </Space>
    )
}
