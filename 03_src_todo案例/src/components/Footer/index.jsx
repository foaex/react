import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
	handleCheck = (event) => {
		// 通过event.target.checked拿到全选框是否勾选这个值
		this.props.checkAll(event.target.checked)
	}
	// 定义清空所有已经完成的事件
	removeAllDone = () => {
		this.props.deleteAll()
	}
	render() {
		const {todos} = this.props
		// 已选个数
		const checkNum = todos.reduce((pre,cur)=>{
			return pre + (cur.done?1:0)
		},0)
		// 总数
		const total = todos.length
		return (
			<div className="todo-footer">
				<label>
					<input type="checkbox" onChange={this.handleCheck} checked={checkNum===total&&total!==0?true:false}/>
				</label>
				<span>
					<span>已完成{checkNum}</span> / 全部{total}
				</span>
				<button className="btn btn-danger" onClick={this.removeAllDone}>清除已完成任务</button>
			</div>
		)
	}
}
