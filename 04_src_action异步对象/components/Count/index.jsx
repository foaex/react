import React, { Component } from 'react'
//  导入store
import store from '../../redux/store'
//  导入action
import { incrementAction,decrementAction,incrementAsync } from '../../redux/count_action'

export default class Count extends Component {


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
		// 调用dispatch方法
		// store.dispatch({
		// 	type:'increment',
		// 	data:value*1 //这里要转化为数值类型
		// })

		// 导入action后的调用dispatch方法
		store.dispatch(incrementAction(value*1))
	}

	decrment = () => {
		const {value} = this.selectNumber
		// store.dispatch({
		// 	type:'decrement',
		// 	data:value*1 //这里要转化为数值类型
		// })

		// 导入action后的调用dispatch方法
		store.dispatch(decrementAction(value*1))
	}

	incrmentIfOdd = () => {
		const {value} = this.selectNumber
		// store.getState()可以获取到保存在store中的state值
		const count = store.getState()
		if(count % 2 !==0){
			// store.dispatch({
				// 	type:'increment',
				// 	data:value*1 //这里要转化为数值类型
				// })
				
				// 导入action后的调用dispatch方法
				store.dispatch(incrementAction(value*1))
			}
		}
		
	// 异步加 
	/* 
		这个异步任务可以放在组件中 让组件自身调用 也可以在action中调用
	*/
	incrmentAsync = () => {
		const {value} = this.selectNumber
		// setTimeout(()=>{
		// 	// store.dispatch({
		// 	// 	type:'increment',
		// 	// 	data:value*1 //这里要转化为数值类型
		// 	// })

		// 	// 导入action后的调用dispatch方法
		// 	store.dispatch(incrementAction(value*1))
		// },500)


		// 使用异步action方法
		store.dispatch(incrementAsync(value*1,500))
	}

	render() {
		return (
			<div>
				<h2>当前运算结果为：{store.getState()}</h2>
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
