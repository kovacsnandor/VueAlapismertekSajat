import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({ 
        user: localStorage.getItem('user') || null,
        //token: JSON.parse(localStorage.getItem('currentToken')) || null,
        token: localStorage.getItem('currentToken') || null,
        errors: null
    }),
    getters: {},
    actions: {
        setUser(user) {
            localStorage.setItem('user', user)
            this.user = user
        },
        setToken(token) {
            // localStorage.setItem('currentToken', JSON.stringify(token))
            localStorage.setItem('currentToken', token)
            this.token = token
        },
        clearStoredData() {
            localStorage.removeItem('currentToken')
            localStorage.removeItem('user')
            this.token = null
            this.user = null
        },
        setErrors(errors) {
            this.errors = errors
        },
        clearErrors() {
            this.errors = null
        }
    },
});