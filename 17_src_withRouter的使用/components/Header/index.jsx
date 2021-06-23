import React, { Component } from 'react'
import { withRouter } from 'react-router'

class Header extends Component {

	back = () => {
		// 此时 会报错 因为 hearder 这个组件是一般组件 没有history这个props属性
		// 所以 引入一个 withRouter 将一般组件包装成路由组件
		// goBack() 表示路由回退
		this.props.history.goBack()
	}

	forward = () => {
		// goForward()表示路由前进
		this.props.history.goForward()
	}

	render() {
		return (
			<div className="page-header">
				<h2>React Router Demo</h2>
				<button onClick={this.back}>回退</button>
				<button onClick={this.forward}>forward</button>
			</div>
		)
	}
}
export default withRouter(Header)
//  withRouter 是一个函数 接收一个组件(这个组件是一般组件)作为参数 会把组件包装成路由组件
//  使这个一般组件也具有路由组件特有的API