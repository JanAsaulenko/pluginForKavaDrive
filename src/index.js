import React from 'react';
import {render} from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import store from './redux/rootReducer'



render(<Provider store={store}><App/></Provider>, document.getElementsByClassName('app')[0]);
