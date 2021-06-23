import React, { Component } from 'react'
import './index.css'

export default class List extends Component {
	render() {
		const {isFirst,isLoading,users,err} = this.props
		return (
			<div className="row">
				{
					// 不能写if判断语句 所以这里只能使用三目元算符
					isFirst?<h2>欢迎使用</h2>:
					isLoading?<h2>Loading......</h2>:
					err?<h2 style={{color:'red'}}>{err}</h2>:
					users.map((usersObj)=>{
						return (
							<div className="card" key={usersObj.id}>
								<a rel="noreferrer" href={usersObj.html_url} target="_blank">
									<img alt="head_avator" src={usersObj.avatar_url} style={{width: '100px'}}/>
								</a>
								<p className="card-text">{usersObj.login}</p>
							</div>
						)
					})
				}
			</div>
		)
	}
}
