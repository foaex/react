//  创建一个reducer函数
// 接收两个参数 之前的状态(preState) 动作对象(action)

// 导入常量定义文件
import { INCREMENT,DECREMENT } from "../constant"

const initState = 0
export default function countReducer(preState=initState,action){
	// 从action对象中解析type data
	const {type,data} = action
	// 判断 type 
	switch (type) {
		// 如果是加
		case INCREMENT:
			return preState + data
		// 如果是减
		case DECREMENT:
			return preState - data
		default:
			return preState
	}
}