import React, { Component } from 'react'

import './index.css'
export default class Item extends Component {
	
	// 定义一个状态
	state = {
		mouse:false
	}
	// 定义鼠标移入、移出事件
	onMouse = (flag) => {
		return () => {
			this.setState({
				mouse:flag
			})
		}
	}
	// 定义勾选框改变
	isCheck = (id) => {
		return (event)=>{
			this.props.updateDone(id,event.target.checked)
		}
	}
	// 定义删除事件
	deleteTodo = (id) =>{
		return () => {
			if(window.confirm('确定要删除吗')){
				this.props.deleteTodo(id)
			}
		}
	}
	render() {
		// 结构赋值 取出todo中的每一个属性
		const {todo} = this.props
		const {mouse} = this.state
		return (
			<li style={{backgroundColor:mouse?'#ddd':'white'}} onMouseEnter={this.onMouse(true)} onMouseLeave={this.onMouse(false)}>
				<label>
					<input type="checkbox" checked={todo.done} onChange={this.isCheck(todo.id)}/>
					<span>{todo.name}</span>
				</label>
				<button className="btn btn-danger" style={{display:mouse?'block':'none'}} onClick={this.deleteTodo(todo.id)}>删除</button>
			</li>
		)
	}
}
