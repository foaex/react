import React, { Component } from 'react'
// 导入propTypes
import PropTypes from 'prop-types'
// 导入一个随机生成id的
// import {nanoid} from 'nanoid'
import './index.css'
export default class Header extends Component {
	// 对传递过来的props进行限制 func表示是函数类型
	static propTypes = {
		addTodos:PropTypes.func.isRequired
	}
	// 定义回车事件
	keyUp = (event) => {
		// keyCode获取键盘的ASCII编码(不推荐使用)
		// key是直接获取你敲击了键盘那个按键
		// 判断是否敲了回车 而且值不能为空
		if(event.key!=="Enter") return
		if(event.target.value.trim() === ''){
			return alert("输入不能为空")
		}
		// 新建一个对象 保存输入框中的值
		const newObj = {
			// 时间戳作为id
			id:Date.now(),
			name:event.target.value,
			done:false
		}
		// 将newObj传给App
		this.props.addTodos(newObj)
		// 清空输入框的值
		event.target.value = ''
	}
	render() {
		return (
			<div className="todo-header">
				<input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.keyUp}/>
			</div>
		)
	}
}
