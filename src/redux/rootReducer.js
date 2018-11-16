import {combineReducers} from 'redux';
import {takeComments} from './reducers/takeComments';
import  {mockStarData} from './reducers/mockStardata';
import {openCreateCommentBlock} from  './reducers/openCreateCommentBlock';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {openShowCommentsBlock} from './reducers/openShowCommentsBlock';
import {pushCommentsIntoStore} from './reducers/pushCommentsIntoStore';
const rootReducers =combineReducers({
    takeComments,mockStarData,openCreateCommentBlock,openShowCommentsBlock,pushCommentsIntoStore
});

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));
export default store