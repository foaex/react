import React, { Component } from 'react'
// 导入消息发布与订阅
// 要下载这个插件 pubsub-js
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {
	search = () => {
		// 普通解构赋值
		// const {value} = this.elementNode

		// 连续解构赋值 如果输出elementNode会报错 值保存在value中
		// 重命名的话这样写 {elementNode:{value:keyWord}} keyWord就保存了输入框中的值
		const {elementNode:{value:keyWord}} = this
		// console.log(keyWord)
		// 发送请求前
		// this.props.updateState({isFirst:false,isLoading:true})
		// 发布消息 接收两个参数 一个消息名 一个数据
		PubSub.publish('updateState',{isFirst:false,isLoading:true})
		axios.get(`/api1/search/users?q=${keyWord}`).then((res)=>{
			// 通知父组件更新状态
			// this.props.updateState({
			// 	isLoading:false,
			// 	users:res.data.items
			// })
			PubSub.publish('updateState',{
				isLoading:false,
				users:res.data.items
			})
		},err=>{
			// this.props.updateState({
			// 	isLoading:false,
			// 	err:err.message
			// })
			PubSub.publish('updateState',{
				isLoading:false,
				err:err.message
			})
		})
	}
	render() {
		return (
			<section className="jumbotron">
				<h3 className="jumbotron-heading">Search Github Users</h3>
				<div>
					<input ref={(c)=> this.elementNode = c} type="text" placeholder="enter the name you search"/>&nbsp;<button onClick={this.search}>搜索</button>
				</div>
			</section>
		)
	}
}
