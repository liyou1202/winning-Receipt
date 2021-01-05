import React,{useEffect, useContext} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Context } from './store';
import { Span } from './styled'
import axios from 'axios';

export default function FormDialog() {
  const [state, dispatch] = useContext(Context)

  const handleCloseDialog = () => {
      //關閉dialog
      dispatch({
          type:'SET_DIALOG',
          value:false
      });
  };
  const allNumOnChange = (e) => {
    if(state.modalInputValue.length < 5){
      //賦值
      dispatch({
          type: 'SET_all_Num_INPUT',
          value:e.target.value
      });
    }

  };
  const winning = (input,amount) => {
      dispatch({
          type: 'SET_DIALOG',
          value:false
      });
      //清空input
      dispatch({
          type: 'SET_all_Num_INPUT',
          value:''
      });
      dispatch({
          type: 'SET_last_3Num_INPUT',
          value:''
      });
  };

  useEffect(() => {
      if (state.modalInputValue.length === 5){
        let input = state.modalInputValue + state.last3Input;
        console.log(input);
        axios.post("http://as-traveler.com/test/lottery2.php", {"input":input})
             .then(res=>{
                  //中多少
                  console.log(res.data.amount);
                  winning(input, res.data.amount);
              });
      }
  },[state.modalInputValue]);
  return (
    <div>
      <Dialog open={state.showDialog} onClose = {handleCloseDialog} aria-labelledby="form-dialog-title" disableBackdropClick ={true}>
        <DialogTitle id="form-dialog-title">恭喜中獎！</DialogTitle>
        <DialogContent>
          <DialogContentText>
            請輸入完整的發票號碼，輸入前五位數後視窗會自動對獎
          </DialogContentText>
          <span>
            <TextField
                autoFocus
                id="name"
                label="請輸入五位數"
                type="text"
                onChange = {allNumOnChange}
                value = {state.modalInputValue}
            />  
            <Span>
                {state.last3Input} 
            </Span> 
          </span>


        </DialogContent>
        <DialogActions>
          <Button onClick = { e => handleCloseDialog(e)} color="primary">
            取消
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}
