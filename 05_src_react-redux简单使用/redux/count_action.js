/* 
	创建actionCreators对象
*/

import { INCREMENT,DECREMENT } from "./constant"

// 创建 加 的action对象 (也可以使用箭头函数)
export  function incrementAction(data) {
	return {
		type: INCREMENT,
		data
	}
}

// 创建 减 的action对象
export  function decrementAction(data) {
	return {
		type: DECREMENT,
		data
	}
}

//  创建异步 加 的action对象
//  返回一个函数 函数中开启了异步任务
//  但是要使用中间件 下载 redux-thunk 在store中引入 applyMiddleware()函数中间件
export function incrementAsync(data,time) {
	return (dispatch) => {
		setTimeout(()=>{
			dispatch(incrementAction(data))
		},time)
	}
}