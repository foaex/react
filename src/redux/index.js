/* 
	用于汇总所有的reducer
*/

//   引入createStore 专门用于创建redux中最为核心的store对象 combineReducers该方法用于整合所有的reducer
import {combineReducers} from 'redux'
//  引入为Count组件服务的reducer
import countReducer from './count/count_reducer'
// 引入为Person组件服务的reducer
import personReducer from './person/reducer'
export default combineReducers({
	// 对countReducer进行取名为sum,则在count组件中要拿countReducer中的值,就要通过state.sum来取
	sum:countReducer,
	person:personReducer
})