import { Image } from 'antd';
import React from 'react';

export default function App(props) {
    return (
        <Image
            width={400}
            src={props.url}
        />
    );
}

