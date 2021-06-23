import React, { Component } from 'react'
import { Link,Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
	state = {
		meaages:[{
			id:'01',
			title:'消息01'
		},{
			id:'02',
			title:'消息02'
		},{
			id:'03',
			title:'消息03'
		}]
	}
	// 编程式路由导航就是操作 history 对象来跳转路由

	// push按钮的点击事件
	pushShow = (id) => {
		// push跳转+携带params参数
		// this.props.history.push(`/home/message/detail/${id}`)

		// push跳转+携带search参数
		// this.props.history.push(`/home/message/detail/?id=${id}`)

		// push跳转+携带state参数
		this.props.history.push(`/home/message/detail`,{id})
	}

	// replace按钮的点击事件
	replaceShow = (id) => {
		// replace跳转+携带params参数
		// this.props.history.replace(`/home/message/detail/${id}`)

		// replace跳转+携带params参数
		// this.props.history.replace(`/home/message/detail/?id=${id}`)

		// replace跳转+携带state参数
		this.props.history.replace(`/home/message/detail`,{id})
	}
	render() {
		return (
			<div>
				<ul>
					{
						this.state.meaages.map((mesObj)=>{
							return (
								<li key={mesObj.id}>
									{/* 第一种传递参数方式: params参数 */}
									{/* <Link to={`/home/message/detail/${mesObj.id}`}>{mesObj.title}</Link> */}

									{/* 第二种传递参数方式: search参数 (也就是query参数) */}
									{/* <Link to={`/home/message/detail/?id=${mesObj.id}`}>{mesObj.title}</Link> */}

									{/* 第三种传递参数方式: state参数(不在地址栏显示参数) */}
									{/* 页面刷新 数据不会丢失 */}
									<Link to={{pathname:'/home/message/detail',state:{id:mesObj.id}}}>{mesObj.title}</Link>

									{/* 以下是使用编程式路由导航 */}
									{/* push 查看会留下历史痕迹 */}
									&nbsp;<button onClick={()=>{this.pushShow(mesObj.id)}}>push查看</button>
									{/* replace 查看不会留下历史痕迹 */}
									&nbsp;<button onClick={()=>{this.replaceShow(mesObj.id)}}>replace查看</button>
								</li>
							)
						})
					}
				</ul>
				{/* 注册路由 */}
				{/* 这里需要接收 Link 路由传过来的 id */}
				{/* <Route path="/home/message/detail/:id" component={Detail}/> */}

				{/* search参数不需要接收 正常注册组件就好 */}
				{/* <Route path="/home/message/detail" component={Detail}/> */}

				{/* state参数不需要接收 正常注册组件就好 */}
				<Route path="/home/message/detail" component={Detail}/>
			</div>
		)
	}
}
