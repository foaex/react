import React, { Component } from 'react'

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
