import React, { Component } from 'react'
import {connect} from 'react-redux' 
import { addPerson } from '../../redux/person/action'
class Person extends Component {

	getUserInfo = () => {
		const name = this.uname.value
		const age = this.uage.value
		const personObj = {
			id:Date.now(),
			name,
			age
		}
		this.props.addPerson(personObj)
	}

	render() {
		return (
			<div>
				<h2>Person组件,上方组件求和为:{this.props.num}</h2>
				<input type="text" ref={c => this.uname = c} />
				<br/>
				<input type="text" ref={c => this.uage = c} />
				<button onClick={this.getUserInfo}>提交</button>
				<ul>
					{
						this.props.persons.map(item => {
							return <li key={item.id}>{item.name}---{item.age}</li>
						})
					}
					
				</ul>
			</div>
		)
	}
}

export default connect(
	state => ({persons:state.person,num:state.sum}),
	{
		addPerson
	}
)(Person)
