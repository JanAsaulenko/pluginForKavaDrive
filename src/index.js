import React from 'react';
import {render} from 'react-dom';
import App from './components/app';
import rootReducers from './redux/rootReducer';
import {Provider} from 'react-redux';
import store from './redux/rootReducer'
import thunk from 'redux-thunk';


render(<Provider store={store}><App/></Provider>, document.getElementsByClassName('app')[0]);
