import React from 'react'
import ReactDOM  from 'react-dom'
// 导入路由
import { BrowserRouter } from "react-router-dom"
// 这个路由会在url中国添加一个"#"
// import {HashRouter} from 'react-router-dom'
import App from './App'
ReactDOM.render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>,
	document.getElementById('root')
)