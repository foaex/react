import React, { Component } from 'react'
// 引入Count组件的容器
import Count from './containers/Count'
import store from './redux/store'
// 引入Person组件的容器
import Person from './containers/Person'
export default class App extends Component {
	render() {
		return (
			<div>
				App...
				<Count store={store}></Count>
				<Person />
			</div>
		)
	}
}
