import ReactDOM from 'react-dom';
import Router from './router'
import axios from 'axios';

// 配置请求基础路径
axios.defaults.baseURL = "http://127.0.0.1:5000";

ReactDOM.render(
    <Router />,
    document.getElementById('root')
);
