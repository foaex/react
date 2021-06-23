import React, { Component } from 'react'
import { Route,Switch,Redirect } from 'react-router'
import MyNavLink from '../../components/MyNavLink'
import News from './News'
import Message from './Message'

export default class Home extends Component {
	render() {
		return (
			<div>
				<h2>Home组件内容</h2>
				<div>
					<ul className="nav nav-tabs">
						<li>
							{/* <a className="list-group-item" href="./home-news.html">News</a> */}
							<MyNavLink to="/home/news">News</MyNavLink>
						</li>
						<li>
							{/* <a className="list-group-item active" href="./home-message.html">Message</a> */}
							<MyNavLink to="/home/message">Message</MyNavLink>
						</li>
					</ul>
					{/* 注册路由 */}
					<Switch>
						<Route path="/home/news" component={News}/>
						<Route path="/home/message" component={Message} />
						<Redirect to="/home/news"/>
					</Switch>
				</div>
			</div>
		)
	}
}
