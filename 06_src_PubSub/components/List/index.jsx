import React, { Component } from 'react'
// 导入消息发布与订阅
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {
	state = {
		users: [],//保存用户数据 
		isFirst:true,//判断是否为第一次打开
		isLoading:false,//判断是否在发送请求
		err:''//保存错误信息
	}
	componentDidMount(){
		// 消息订阅 只要Search发布了 updateState 消息 这里就能接收到 
		// subscribe()接收两个参数 一个消息名 一个回调函数
		// 回调函数又可以接收两个参数
		// 一个消息名 一个数据       _ 表示一个占位符
		this.token = PubSub.subscribe('updateState',(_,stateObj) => {
			this.setState(stateObj)
		})
	}
	componentWillUnmount(){
		PubSub.unsubscribe(this.token)
	}
	render() {
		const {isFirst,isLoading,users,err} = this.state
		return (
			<div className="row">
				{
					// 不能写if判断语句 所以这里只能使用三目元算符
					isFirst?<h2>欢迎使用</h2>:
					isLoading?<h2>Loading......</h2>:
					err?<h2 style={{color:'red'}}>{err}</h2>:
					users.map((usersObj)=>{
						return (
							<div className="card" key={usersObj.id}>
								<a rel="noreferrer" href={usersObj.html_url} target="_blank">
									<img alt="head_avator" src={usersObj.avatar_url} style={{width: '100px'}}/>
								</a>
								<p className="card-text">{usersObj.login}</p>
							</div>
						)
					})
				}
			</div>
		)
	}
}
