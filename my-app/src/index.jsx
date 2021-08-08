import React from 'react';
import ReactDom from 'react-dom';
import { Header } from './Header';


window.addEventListener('load', () => {
    ReactDom.render(<Header />, document.getElementById('react_root'))
})

