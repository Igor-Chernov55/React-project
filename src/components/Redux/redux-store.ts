import {applyMiddleware, combineReducers, createStore} from "redux";
import {postsProfileReducer} from "./PostsProfileReducer";
import {messageReducer} from "./MessageReducer";
import {usersReducer} from "./UsersReducer";
import {authUsersReducer} from "./AuthUsersReducer";
import thunkMiddleWare from "redux-thunk"

export const rootReducer = combineReducers({
    profilePage: postsProfileReducer,
    dialogsPage: messageReducer,
    usersPage: usersReducer,
    authUser: authUsersReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

// @ts-ignore
export const storeRedux = createStore(rootReducer, applyMiddleware(thunkMiddleWare))

export default storeRedux