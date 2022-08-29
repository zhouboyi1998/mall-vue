import { defineStore } from 'pinia'

export const useTokenStore = defineStore('TOKEN', {
    state: () => ({
        token: '',
        refreshToken: '',
        expiresIn: 0
    }),
    getters: {},
    actions: {}
})
