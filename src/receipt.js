import React, { Fragment, useContext, useEffect } from 'react';
import axios from 'axios';
import {Input,
		} from './styled'
import FormDialog from './dialog';
import { Context } from './store';


export default function Receipt() {
	// state抓取globle state 
	const [state, dispatch] = useContext(Context)

    useEffect(() => {
    	if (state.last3Input.length === 3){
    		var flag = false;
    		axios.post("http://as-traveler.com/test/lottery1.php", {"input":state.last3Input})
    		.then(res=>{
    			flag = res.data;
    			if (flag){
    				//開啟dialog
		    		dispatch({
		      			type: 'SET_DIALOG',
		      			value:true
		    		});

    			}else{
			    	//歸零
					dispatch({
			  			type: 'SET_last_3Num_INPUT',
			  			value: ''
					});
    			}
    		});

    	}
	},[state.last3Input]);

	const last_3Num_OnChange = e => {
	    if(state.last3Input.length < 3){
		    //賦值
			dispatch({
	  			type: 'SET_last_3Num_INPUT',
	  			value: e.target.value
			});
	    }
 	}
	return(
			<Fragment>
				<Input  value = {state.last3Input}
						onChange = { e => last_3Num_OnChange(e)}
						type = "text"/>
				<FormDialog/>
			</Fragment>
		);

}
