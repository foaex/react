import React, { Component } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'
export default class App extends Component {
	// 状态在哪里 操作状态的方法就在哪里
	// 初始化状态
	state = {
		todos:[{
			id:1,
			name:'吃饭',
			done:true
		},{
			id:2,
			name:'睡觉',
			done:true
		},{
			id:3,
			name:'打代码',
			done:false
		}]
	}
	// 声明一个回调函数 用于向数据中添加数据 将这个回调函数传递给Header组件
	addTodos = (todoObj) => {
		// 获取当前的todos
		const {todos} = this.state
		// 向数组中追加一个todoobj
		let newTodos = [todoObj,...todos]
		// 更改状态
		this.setState({
			todos:newTodos
		})
	}
	// 声明一个方法 修改todos数组中每项的done属性
	updateDone = (id,done) => {
		// 获取状态
		const {todos} = this.state
		// 匹配处理数据
		const newsObj = todos.map((todo)=>{
			if(todo.id === id) return {...todo,done}
			else return todo
		})
		// 修改状态
		this.setState({
			todos:newsObj
		})
	}
	// 声明一个方法 移除被删除的数据项
	deleteTodo = (id) => {
		// 获取数据 
		const {todos} = this.state
		// 把要删除的从数组移除
		const newObj = todos.filter((todo)=>{
			// filter()函数遍历数组中每一个对象 并对其进行判断 为true会被返回 并要用一个新数组接收
			return todo.id !== id
		})
		// 更改状态
		this.setState({
			todos:newObj
		})
	}
	// 声明一个方法 用于判断是否全选
	checkAll = (done) => {
		// 获取数组
		const {todos} = this.state
		// 点击全选 把所有项的done修改为true
		const newObj = todos.map(todo=>{
			// 这样写相当于把todo中的done修改为传过来的done
			return {...todo,done}
		})
		// 更改状态
		this.setState({
			todos:newObj
		})
	}
	// 定义清除已经完成的
	deleteAll = () => {
		// 获取数据
		const {todos} = this.state
		// 过滤数据
		const newObj = todos.filter((todo)=>{
			return todo.done === false
		})
		// 更改状态
		this.setState({
			todos:newObj
		})
	}
	render() {
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Header addTodos={this.addTodos}/>
					{/* 给List传递一个数组 传递一个更新done的方法*/}
					<List todos={this.state.todos} updateDone={this.updateDone} deleteTodo={this.deleteTodo}/>
					{/* 给footer组件传递一个checkAll方法 */}
					<Footer checkAll={this.checkAll} todos={this.state.todos} deleteAll={this.deleteAll}/>
				</div>
			</div>
		)
	}
}
