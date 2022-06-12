import ReactDOM from 'react-dom';
import Router from './router'
import axios from 'axios';

// 配置请求基础路径
axios.defaults.baseURL = "http://120.76.135.19:5000";

ReactDOM.render(
    <Router />,
    document.getElementById('root')
);
