type LocationType = {
    city: string
    country: string
}

type UsersType = {
    id: number
    followed: boolean
    name: string
    status: string
    location: LocationType
    text: string
}

export type UsersReducerType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCounter: number
    firstCount: number
}


const initialState = {

    users: [],
    pageSize: 5,
    totalUsersCounter: 100,
    firstCount: 1

}


export const usersReducer = (state: UsersReducerType = initialState, action: ActionType): UsersReducerType => {

    switch (action.type) {
        case 'FOLLOW' : {
            return {
                ...state,
                users: state.users.map((u) => u.id === action.userId ? {...u, followed: true} : u)
            }
        }

        case 'UNFOLLOW' : {
            return {
                ...state,
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
            return {
                ...state,
                users: [...action.users]
            }
        }
        case 'SET_USERS_CURRENT_PAGE': {
            return {
                ...state,
                firstCount: action.firstCount
            }
        }

        default:
            return state
    }
}

type ActionType =
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setUsersCurrentPageAC>

export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        userId

    } as const
}

export const unFollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        userId

    } as const
}

export const setUsersAC = (users: Array<UsersType>) => {
    return {
        type: 'SET_USERS',
        users

    } as const
}
export const setUsersCurrentPageAC = (firstCount: number) => {
    return {
        type: 'SET_USERS_CURRENT_PAGE',
        firstCount

    } as const
}