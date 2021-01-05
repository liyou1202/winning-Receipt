import React from 'react';
import ReactDOM from 'react-dom';
import Receipt from './receipt';
import Store from './store';


ReactDOM.render(
    <Store>
        <Receipt />
    </Store>,
    document.getElementById('root'));
