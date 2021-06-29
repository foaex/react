import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/store'
import {Provider} from 'react-redux'
ReactDOM.render(
	// Provider会自动派发store 
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
)

// react-redux中的connect()方法会自动监测state有没有刷新 所以这里可以不用store来监测了
// store.subscribe(()=>{
// 	ReactDOM.render(<App/>,document.getElementById('root'))
// })