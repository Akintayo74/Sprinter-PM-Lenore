const API_BASE_URL = 'http://localhost:3000';

export const api = {
    signup: async(email, password) => {
        const response = await fetch(`${API_BASE_URL}/auth/register`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })

        const json = await response.json()

        if(!response.ok) {
            throw new Error(json.message || "Registration failed")
        }

        return json
    },

    verify: async(token) => {
        const response = await fetch(`${API_BASE_URL}/auth/verify-email?token=${token}`, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        })

        const json = await response.json()

        if(!response.ok) {
            throw new Error(json.message || 'Email verification failed')
        }

        return json
    },

    login: async(email, password) => {
        const response = await fetch(`${API_BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })

        const json = await response.json()

        if(!response.ok) {
            throw new Error(json.message || 'Login failed')
        }

        return json
    }
}