import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store'
import {Provider} from 'react-redux'

// config thằng thằng store cho UI 
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, document.getElementById('root'));