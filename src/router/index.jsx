import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import Direct from '../pages/Direct'
import RealTime from '../pages/RealTime'

// 定义一个路由
export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/direct" element={<Direct />}></Route>
                    <Route path="/real_time" element={<RealTime />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
