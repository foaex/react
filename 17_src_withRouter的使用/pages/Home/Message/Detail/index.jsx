import React, { Component } from 'react'
// import qs from 'querystring'


// let obj = {
// 	name: 'zhangsan',
// 	age:18
// }
// console.log(qs.stringify(obj)) // name=zhangsan&age=18
// let carName = "name=奔驰&price=199"
// console.log(qs.parse(carName)) //{name: "奔驰", price: "199"}


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
		// const {id} = this.props.match.params


		// 拿到search方式传递过来的参数
		// const {search} = this.props.location //拿到的是 ?id=01 这种形式的 所以要引入 querystring 模块
		// const {id} = qs.parse(search.slice(1))


		// 拿到state方式传递过来的参数
		const {id} = this.props.location.state
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
