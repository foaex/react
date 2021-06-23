import React, { Component } from 'react'
// 导入路由
import { Link,Route } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<div className="page-header"><h2>React Router Demo</h2></div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							{/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a> */}
							{/* 编写路由 由于所有的路由必须被一个总路由包裹起来 所以在入口文件还要导入路由*/}
							<Link className="list-group-item" to="/about">About</Link>
							<Link className="list-group-item" to="/home">Home</Link>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 路由展示 (配置路由) */}
								<Route path='/about' component={About}/>
								<Route path='/home' component={Home}/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
