import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '78b9fdb7-2cb3-4cc9-90a9-7547abd3a933'
    }
})

export const usersAPI = {
    getUsers(firstCount: number, pageSize: number) {
        return instance.get(
            `users?page=${firstCount}&count=${pageSize}`

        ).then((response) => response.data)
    },
    follow(userId: number) {
        return instance.post(
            `follow/${userId}`
        ).then((response) => response.data)
    },
    unFollow(userId: number) {
        return instance.delete(
            `follow/${userId}`
        ).then((response) => response.data)
    },
    getProfile(users: number){
      return instance.get(`profile/${users}`)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`/profile/status/${userId}`)
    },
    getStatus(userId: string) {
        return instance.get(`status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`status`, {status: status})
     }
}