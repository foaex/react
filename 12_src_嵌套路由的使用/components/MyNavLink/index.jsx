import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
// 二次封装NavLink

export default class MyNavLink extends Component {
	render() {
		return (
			<NavLink className="list-group-item" activeClassName="demo" {...this.props}/>
		)
	}
}
