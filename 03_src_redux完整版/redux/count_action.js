/* 
	创建actionCreators对象
*/

import { INCREMENT,DECREMENT } from "./constant"

// 创建 加 的action对象
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