import React,{Fragment,useState,useEffect,useReducer} from 'react';
import axios from 'axios';
import {Input,
		} from './styled'
import FormDialog from './dialog';
import {reducer,init} from './reducer';

export default function Receipt() {
	const [state , dispatch] = useReducer(reducer,init);
	console.log (init);
    // const [inputValue, setValue] = React.useState('');
    // const [prev,setPrev] = React.useState('');
    // const [showDialog,setshowDialog] = React.useState(false);
    // const handleChange = (e) =>{
    // 		setValue(e.target.value);
    // }
    // useEffect(()=>{
    // 	if(inputValue.length == 3){
    //    		setPrev(inputValue);
    //    		axios.post(`http://as-traveler.com/test/lottery1.php`, { input:inputValue })
    //  			 .then(res => {
		  //   		    console.log(res.data);
		  //   		    if(res.data){setshowDialog(true)}
		    		    	
    //  	 })
    // 		setValue('');
    // 	}
    // });

	return(
			/**
			<Fragment>
				<Input  value = {inputValue}
						onChange = {handleChange}
						maxLength = "3"
						type = "number"/>
				<h3>{prev}</h3>
				<FormDialog show = {showDialog}/>
			</Fragment>
			*/
			<Fragment>
				<p>{}</p>
			</Fragment>
		);

}
