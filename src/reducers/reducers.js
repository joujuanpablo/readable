import { combineReducers } from 'redux';
import posts from './posts.reducer';
import ui from './ui.reducer';

export default combineReducers({
    posts,
    ui
});