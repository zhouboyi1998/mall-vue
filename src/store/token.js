import { defineStore } from 'pinia'

export const useTokenStore = defineStore('TOKEN', {
    state: () => ({
        accessToken: '',
        refreshToken: '',
        expiresIn: 0
    }),
    getters: {},
    actions: {}
})
