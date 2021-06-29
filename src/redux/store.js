//  该文件专门用于暴露一个store对象 整个应用只有一个store对象
//   引入createStore 专门用于创建redux中最为核心的store对象 combineReducers该方法用于整合所有的reducer
import {createStore,applyMiddleware} from 'redux'
// 引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'
// 引入异步要用的thunk
import thunk from 'redux-thunk'
// 引入汇总后的reducer
import allReducers from './index'
//  暴露store
export default createStore(allReducers,composeWithDevTools(applyMiddleware(thunk)))