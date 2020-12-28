export const init = {count :0}
export const reducer =(state,action)=>{
	switch(action.type){
		case'increment':
			return {count:123};
		default:
			return init;
	}
}
