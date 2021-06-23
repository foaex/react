import React, { Component } from 'react'
// 导入路由
import { Route,Switch,Redirect } from "react-router-dom"
// pages中的是路由组件 会接收到由路由传递的三个固定参数
import Home from "./pages/Home"
import About from "./pages/About"
// components中的是一般组件 要写组件标签 在组建标签中写什么就会传递什么
import Header from "./components/Header"
import MyNavLink from './components/MyNavLink'

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
							{/* <NavLink className="list-group-item" to="/about" activeClassName="demo">About</NavLink>
							<NavLink className="list-group-item" to="/home" activeClassName="demo">Home</NavLink> */}

							{/* MyNavLink 标签中的文字 会以props.children自动传给NavLink 然后使用{...this.props}来展开MyNavLink传给NavLink的props */}
							{/* children相当于input中的value属性 */}
							<MyNavLink to="/about">About</MyNavLink>
							<MyNavLink to="/home">Home</MyNavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 路由展示 (配置路由) 这样写的话会导致匹配有问题 如果有多个/home 就会把所有的都匹配出来*/}
								{/* 所以要在这里使用Switch路由 只会匹配一次 */}
								<Switch>
									{/* 正常情况下 路由值模糊匹配*/}
									{/* 想要精准匹配要加一个属性 exact */}
									<Route path='/about' component={About}/>
									<Route path='/home' component={Home}/>
									{/* 要实现默认路由 要导入一个新的模块 Redirect */}
									{/* Redirect 需要放在所有路由的下方 to="" to里面写要想跳转的路由*/}
									<Redirect to="/home"/>
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
