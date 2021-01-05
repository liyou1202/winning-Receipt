import styled from 'styled-components';

export const Input = styled.input.attrs({placeholder:'請輸入後三碼'})`
	width:160px;
	height:38px;
	padding:0 20px 0 20px;
	margin-top:10px;
	margin-left:20px;
	outline:none;
	background:#eee;
	font-size:18px;
	color:#666;
	&::placeholder{
		color:#999;
	}
	&.modal{
		placeholder:'請輸入全部數字'
	}
`
export const Span = styled.span`
    position: relative;
    top: 25px;
    left: 10px;
	padding:0px 20px 0 20px;
`