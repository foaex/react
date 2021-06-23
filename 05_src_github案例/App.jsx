import React, { Component } from 'react'
import Search from "./components/Search"
import List from "./components/List";
export default class App extends Component {
	state = {
		users: [],//保存用户数据 
		isFirst:true,//判断是否为第一次打开
		isLoading:false,//判断是否在发送请求
		err:''//保存错误信息
	}
	updateState = (stateObj) => {
		this.setState(stateObj)
	}
	render() {
		return (
			<div className="container">
				<Search updateState={this.updateState}/>
				<List {...this.state}/>
			</div>
		)
	}
}
