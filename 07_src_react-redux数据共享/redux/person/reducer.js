import {ADDPERSON} from '../constant'

const init = [{id:'1',name:'初始化',age:0}]
export default function personReducer(preState=init,action){
	const {type,data} = action
	switch (type) {
		case ADDPERSON:
			return [data,...preState]
		default: 
			return preState
	}
}