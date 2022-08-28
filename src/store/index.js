import { defineStore } from 'pinia'

export const useTokenStore = defineStore('TOKEN', {
    state: () => {
        return {
            token: '',
            refreshToken: '',
            expiresIn: 0
        }
    },
    getters: {},
    actions: {}
})
