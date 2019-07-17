import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const myApp =(
    <div>
        <h1 id="title">Welcome to Greens Kiosk</h1>
        <p>We sell fruits and vegetables</p>
        <h2>Products</h2>
        <h3>Fruits</h3>
        <h3>Vegetables</h3>

    </div>
)
ReactDOM.render(myApp, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
