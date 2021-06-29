import React, { Component } from 'react'

export default class Count extends Component {

	state = {
		count : 0
	}

	incrment = () => {
		const {value} = this.selectNumber
		const {count} = this.state
		this.setState({
			count: count + value*1
		})
	}

	decrment = () => {
		const {value} = this.selectNumber
		const {count} = this.state
		this.setState({
			count:count-value*1
		})
	}

	incrmentIfOdd = () => {
		const {value} = this.selectNumber
		const {count} = this.state
		if(count % 2 !==0){
			this.setState({
				count:count+value*1
			})
		}
	}

	incrmentAsync = () => {
		const {value} = this.selectNumber
		const {count} = this.state
		setTimeout(()=>{
			this.setState({
				count:count+value*1
			})
		},500)
	}

	render() {
		return (
			<div>
				<h2>当前运算结果为：{this.state.count}</h2>
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
