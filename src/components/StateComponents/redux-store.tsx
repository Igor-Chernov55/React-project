import {combineReducers, createStore} from "redux";
import {postsProfileReducer} from "./PostsProfileReducer";
import {messageReducer} from "./MessageReducer";

export const rootReducer = combineReducers({
    profilePage: postsProfileReducer,
    dialogsPage: messageReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

// @ts-ignore
export const storeRedux = createStore(rootReducer)

export default storeRedux