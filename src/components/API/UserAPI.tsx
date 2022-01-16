import React from 'react';
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
            `users?page=${firstCount}&count=${pageSize}`,
            {
                withCredentials: true
            }
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
    }

}
