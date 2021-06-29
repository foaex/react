// 导入action对象
import {incrementAction,decrementAction,incrementAsync} from '../../redux/count/count_action'
//  引入connect
import {connect} from 'react-redux'
import React, { Component } from 'react'
// 可以将组件定义在这里 然后直接挂载 而不用暴露出去
class Count extends Component {
	incrment = () => {
		const {value} = this.selectNumber
		// 调用加法
		this.props.incrementAction(value*1)
	}

	decrment = () => {
		const {value} = this.selectNumber
		// 调用减法
		this.props.decrementAction(value*1)
	}
	incrmentIfOdd = () => {
		const {value} = this.selectNumber
		if(this.props.count % 2 !== 0){
			this.props.incrementAction(value*1)
		}
	}	
	// 异步加 
	/* 
		这个异步任务可以放在组件中 让组件自身调用 也可以在action中调用
	*/
	incrmentAsync = () => {
		const {value} = this.selectNumber
		this.props.incrementAsync(value*1,1000)	
	}
	render() {
		// console.log(this.props);
		return (
			<div>
				<h2>当前运算结果为：{this.props.count},下方人数为:{this.props.total}</h2>
				<select ref={c => this.selectNumber = c}>
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>
				<button onClick={this.incrment}>+</button>
				<button onClick={this.decrment}>-</button>
				<button onClick={this.incrmentIfOdd}>奇数再运算</button>
				<button onClick={this.incrmentAsync}>异步运算</button>
			</div>
		)
	}
}

export default connect(
	// mapStateToProps的简写 箭头函数
	state => ({count:state.sum,total:state.person.length}),
	// mapDispatchToProps的简写 对象 key:value
	// 底层代码会自动调用dispatch方法
	{
		incrementAction,
		decrementAction,
		incrementAsync
	}
)(Count)