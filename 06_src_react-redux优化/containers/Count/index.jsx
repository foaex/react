
// 导入action对象
import {incrementAction,decrementAction,incrementAsync} from '../../redux/count_action'
//  引入connect
import {connect} from 'react-redux'
import React, { Component } from 'react'
// 可以将组件定义在这里 然后直接挂载 而不用暴露出去
class Count extends Component {
	/* // 点击加号 count_reducer中的preState发生了改变 但是页面的值并没有随之发生改变 所以要使用钩子来更新组件中的state
	// 除了在组件中使用该方法来刷新state的改变 还可以在 index.js中把整个app组件刷新
	componentDidMount(){
		// store中订阅了一个方法 一旦state发生改变 就会调用回调
		store.subscribe(()=>{
			// 执行这个方法后 会自动调用render()来刷新
			this.setState({})
		})
	} */

	incrment = () => {
		const {value} = this.selectNumber
		// 调用加法
		this.props.add(value*1)
	}

	decrment = () => {
		const {value} = this.selectNumber
		// 调用减法
		this.props.del(value*1)
		
	}

	incrmentIfOdd = () => {
		const {value} = this.selectNumber
		if(this.props.count % 2 !== 0){
			this.props.add(value*1)
		}
	}
		
	// 异步加 
	/* 
		这个异步任务可以放在组件中 让组件自身调用 也可以在action中调用
	*/
	incrmentAsync = () => {
		const {value} = this.selectNumber
		this.props.addAsync(value*1,1000)
		
	}

	render() {
		// console.log(this.props);
		return (
			<div>
				<h2>当前运算结果为：{this.props.count}</h2>
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


/* 
	传递状态 返回一个对象
	可以在 components中的count组件中打印props 可以看到在这里传递的count以及方法
	会自动接收到store中state
	function mapStateToProps(state) {
		return {
			count:state
		}
	}

	传递操作状态的方法 返回一个对象
	对象中包含一些方法
	会自动接收dispatch方法
	function mapDispatchToProps(dispatch) {
		return {
			定义加的方法
			add:number => dispatch(incrementAction(number*1)),
			定义减的方法
			del:number => dispatch(decrementAction(number*1)),
			定义异步操作的加法
			在incrementAsync方法中定义了两个参数 所以要传两个参数
			addAsync:(number,time) => dispatch(incrementAsync(number*1,time))
		}
	}

	使用connect()()创建并暴露一个Count的容器
	connect()函数可以接收两个回调函数作为参数
	export default connect(mapStateToProps,mapDispatchToProps)(CountUI) 
*/

// 以上可以简写

export default connect(
	// mapStateToProps的简写 箭头函数
	state => ({count:state}),
	// mapDispatchToProps的简写 对象 key:value
	// 底层代码会自动调用dispatch方法
	{
		add:incrementAction,
		del:decrementAction,
		addAsync:incrementAsync
	}
)(Count)