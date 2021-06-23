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
	render() {
		return (
			<div>
				<ul>
					{
						this.state.meaages.map((mesObj)=>{
							return (
								<li key={mesObj.id}>
									{/* 这里可以通过路由来传params参数 */}
									{/* <Link to={`/home/message/detail/${mesObj.id}`}>{mesObj.title}</Link> */}

									{/* 第二种传递参数方式: search参数 (也就是query参数) */}
									<Link to={`/home/message/detail/?id=${mesObj.id}`}>{mesObj.title}</Link>
								</li>
							)
						})
					}
				</ul>
				{/* 注册路由 */}
				{/* 这里需要接收 Link 路由传过来的 id */}
				{/* <Route path="/home/message/detail/:id" component={Detail}/> */}

				{/* search参数不需要接收 正常注册组件就好 */}
				<Route path="/home/message/detail" component={Detail}/>
			</div>
		)
	}
}
