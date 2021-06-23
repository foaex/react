import React,{Component} from 'react'
// 引入hello组件
import Hello from'./components/Hello'
// 引入welcome组件
import Welcome from './components/Welcome'
// 引入css样式
import './App.css'
export default class App extends Component{
	render(){
		return (
			<div >
				<Hello/>
				<Welcome/>
			</div>
		)
	}
}