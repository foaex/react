import React, { Component } from 'react'

export default class Detail extends Component {
	state = {
		detailMessage:[{
			id:'01',
			title:'消息01',
			content:"你好,中国"
		},{
			id:'02',
			title:'消息02',
			content:"你好,自己"
		},{
			id:'03',
			title:'消息03',
			content:"你好,未来的自己"
		}]
	}
	render() {
		// console.log(this.props);
		// 拿到从Message组件传过来的params参数
		const {id} = this.props.match.params
		// 遍历 detailMessage 找到合适的id渲染消息
		const showBoj = this.state.detailMessage.find((item)=>{
			return item.id === id
		})
		return (
			<ul>
				<li>ID: {id}</li>
				<li>TITLE: {showBoj.title}</li>
				<li>CONTENT: {showBoj.content}</li>
			</ul>
		)
	}
}
