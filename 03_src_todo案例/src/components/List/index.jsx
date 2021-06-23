import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import Item from '../Item'

export default class List extends Component {
	static propTypes = {
		updateDone:PropTypes.func.isRequired,
		todos:PropTypes.array.isRequired,
		deleteTodo:PropTypes.func.isRequired
	}
	render() {
		// 通过props拿到App组件传递过来的todos
		const {todos,updateDone,deleteTodo} = this.props
		return (
		<ul className="todo-main" >
				{/* 数组有多少项 就生成多少个Item */}
				{
					todos.map(todo => {
						// 同时将每一个数组项传递给Item组件 让Item组件渲染出来
						return <Item key={todo.id} todo={todo} updateDone={updateDone} deleteTodo={deleteTodo}/>
					})
				}
			</ul>
		)
	}
}
