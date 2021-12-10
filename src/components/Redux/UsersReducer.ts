type LocationType = {
    city: string
    country: string
}

type UsersType = {
    id: number
    followed: boolean
    userName: string
    status: string
    location: LocationType
    text: string
}

export type UsersReducerType = {
    users:Array<UsersType>
}

const initialState = {
    users: [
        // {id: 1,followed:true, userName: 'Dimych', status:'main teacher', location: {city: 'Minsk', country:"Belarus"}, text:'some text'},
        // {id: 2,followed:false, userName: 'Vica', status:'security', location: {city: 'Moscow', country:"Russia"}, text:'hello'},
        // {id: 3,followed:true, userName: 'Pasha', status:'advanced', location: {city: 'Astana', country:"Kazhahstan"}, text:'anything'}
        ]
}


export const usersReducer = (state:  UsersReducerType = initialState, action: ActionType): UsersReducerType => {

    switch (action.type) {
        case 'FOLLOW' : {
            return {...state,
                users: state.users.map((u) => u.id === action.userId ? {...u,followed: true} : u)
            }
        }

        case 'UNFOLLOW' : {
            return {...state,
                users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {...u, followed: false}
                        }
                        return u
                    }
                )
            }
        }

        case 'SET_USERS': {
            return{
                ...state,
                users: [...state.users, ...action.users]
            }
        }

        default: return state
    }
}

type ActionType =
    | ReturnType<typeof followAC >
    | ReturnType<typeof unFollowAC >
    | ReturnType<typeof setUsersAC >

export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId

    }as const
}

export const unFollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId

    }as const
}

export const setUsersAC = (users: Array<UsersType>) => {
    return {
        type: 'SET_USERS',
        users

    }as const
}