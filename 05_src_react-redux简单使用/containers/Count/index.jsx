//  引入Count的UI组件
import CountUI from '../../components/Count'
// 导入action对象
import {incrementAction,decrementAction,incrementAsync} from '../../redux/count_action'
//  引入connect
import {connect} from 'react-redux'

/* 
	传递状态 返回一个对象
	可以在 components中的count组件中打印props 可以看到在这里传递的count以及方法
	会自动接收到store中state
	function mapStateToProps(state) {
		return {
			count:state
		}
	}

	传递操作状态的方法 返回一个对象
	对象中包含一些方法
	会自动接收dispatch方法
	function mapDispatchToProps(dispatch) {
		return {
			定义加的方法
			add:number => dispatch(incrementAction(number*1)),
			定义减的方法
			del:number => dispatch(decrementAction(number*1)),
			定义异步操作的加法
			在incrementAsync方法中定义了两个参数 所以要传两个参数
			addAsync:(number,time) => dispatch(incrementAsync(number*1,time))
		}
	}

	使用connect()()创建并暴露一个Count的容器
	connect()函数可以接收两个回调函数作为参数
	export default connect(mapStateToProps,mapDispatchToProps)(CountUI) 
*/

// 以上可以简写

export default connect(
	// mapStateToProps的简写 箭头函数
	state => ({count:state}),
	// mapDispatchToProps的简写 对象 key:value
	// 底层代码会自动调用dispatch方法
	{
		add:incrementAction,
		del:decrementAction,
		addAsync:incrementAsync
	}
)(CountUI)