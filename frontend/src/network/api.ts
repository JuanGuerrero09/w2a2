import { UserModel} from '../models/user'

async function fetchData(input: RequestInfo, init?: RequestInit) {
    const response = await fetch(input, init)
    if (response.ok) {
        return response
    }
    else {
        const errorBody = await response.json()
        const errorMessage = errorBody.error
        throw Error(errorMessage)
    }
}

export async function getLoggedUser(): Promise<UserModel> {
    const response = await fetchData('api/users', { method: 'GET'})
    return response.json()
}

interface LoginCredentials{
    username: string,
    password: string
}

export async function login(credentials: LoginCredentials){
    const response = await fetchData('api/users/login', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    })
    return response.json()
}

export async function logOut(){
    await fetchData('api/users/logout',{
        method: 'POST'
    })
}

interface SignUpCredentials {
    username: string, 
    email: string,
    password: string
}

export async function signUp(credentials: SignUpCredentials){
    const response = await fetchData('api/users/signup', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    })
    return response.json()
}

export async function getNotes(){
    const response = await fetchData('api/notes', {
        method: 'GET'
    })
    return response.json()
}
