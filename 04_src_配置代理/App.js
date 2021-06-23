import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {
	getStudent = () => {
		// 这里涉及跨域 因此要使用代理
		// 在package.json中设置 proxy http://localhost:5000/students
		// 但是在package.json中只能设置一个代理 因此要使用另一种方法
		// 配置了代理服务器 所以要在请求中添加 /api1
		axios.get('http://localhost:3000/api1/students').then(res => {
			console.log(res.data);
		}).catch(err => {
			console.log(err);
		})
	}
	getCar = () => {
		// 配置了代理服务器 所以要在请求中添加 /api2
		axios.get('http://localhost:3000/api2/cars').then(res => {
			console.log(res.data);
		}).catch(err => {
			console.log(err);
		})
	}
	render() {
		return (
			<div>
				<button onClick={this.getStudent}>获取学生信息</button>
				<button onClick={this.getCar}>获取车辆信息</button>
			</div>
		)
	}
}

