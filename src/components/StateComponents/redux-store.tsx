import {combineReducers, createStore} from "redux";
import {postsReducer} from "./PostsReducer";
import {messageReducer} from "./MessageReducer";

let reducers = combineReducers({
    postsReducer,
    messageReducer
})

// @ts-ignore
let store = createStore(reducers)

export default store