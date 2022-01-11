
export type AuthUsersType = {
    id: number
    email: string | null
    login: string | null
    isAuth: boolean
}

export const initialState: AuthUsersType = {
    id: 2,
    email: null,
    login: null,
    isAuth: false
}

export const authUsersReducer = (state: any = initialState, action: ActionType) => {
    switch (action.type) {
        case "AUTH-USER": {
            return {
                ...state,
                ...action.data
            }
        }

    }
}

type ActionType = ReturnType<typeof authUser>;

export const authUser = (id: number, email: string | number, login: string | number) => {
    return {
        type: 'AUTH-USER',
        data: {
            id,
            email,
            login,
        }

    } as const
}