import React, { Component } from 'react'
// 导入路由
import { NavLink,Route } from "react-router-dom"
// pages中的是路由组件 会接收到由路由传递的三个固定参数
import Home from "./pages/Home"
import About from "./pages/About"
// components中的是一般组件 要写组件标签 在组建标签中写什么就会传递什么
import Header from "./components/Header"

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<Header></Header>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							{/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a> */}
							{/* 编写路由 由于所有的路由必须被一个总路由包裹起来 所以在入口文件还要导入路由
							Link路由组件必能动态的添加样式 所以要使用一个NavLink的路由组件*/}
							{/* <Link className="list-group-item" to="/about">About</Link>
							<Link className="list-group-item" to="/home">Home</Link> */}

							{/* NavLink 已经自己定义好了 点击那个组件 给那个组件添加active样式 由于bootstrap的设计和NavLink一样 
							所以不用给NavLink添加activeClassName属性 当类名不一样时 才要写 同时要注意权重问题 */}
							<NavLink className="list-group-item" to="/about" activeClassName="demo">About</NavLink>
							<NavLink className="list-group-item" to="/home" activeClassName="demo">Home</NavLink>
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
