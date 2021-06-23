import React from 'react'
import ReactDOM  from 'react-dom'
// 导入路由

// BrowserRouter 兼容性差 ie9以下不支持
// 同时 使用 state参数 路由传递时 刷新页面 数据不会丢失
import { BrowserRouter } from "react-router-dom"

// 这个路由会在url中国添加一个"#"
// HashRouter 兼容性比 BrowserRouter好
// 使用 state参数 路由传递时 刷新页面 数据会丢失
// import {HashRouter} from 'react-router-dom'

import App from './App'
ReactDOM.render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>,
	document.getElementById('root')
)