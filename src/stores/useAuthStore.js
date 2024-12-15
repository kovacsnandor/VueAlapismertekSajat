import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({ 
        user: null,
        token: JSON.parse(localStorage.getItem('currentToken')) || null,
        errors: null
    }),
    getters: {},
    actions: {
        setUser(user) {
            this.user = user
        },
        setToken(token) {
            localStorage.setItem('currentToken', JSON.stringify(token))
            this.token = token
        },
        clearStoredData() {
            localStorage.removeItem('currentToken')
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