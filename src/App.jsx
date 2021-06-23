import React, { Component } from 'react'
import { Button,DatePicker } from 'antd'
import { WechatOutlined } from '@ant-design/icons'


const { RangePicker } = DatePicker
export default class App extends Component {

	
	render() {
		function onChange(date, dateString) {
			console.log(date, dateString);
		}
		return (
			<div>
				App...
				<Button type="primary">按钮</Button>
				<WechatOutlined />
				<DatePicker onChange={onChange} />
				<RangePicker />
			</div>
		)
	}
}
