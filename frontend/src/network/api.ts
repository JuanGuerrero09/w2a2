import { UserModel} from '../models/user'
import { NoteModel } from '../models/note'
import { DrawModel } from '../models/draw'


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

export async function getPartner(){
    const response = await fetchData('api/users/getpartner', {
        method: 'GET'
    })
    return response.json()
}

interface AddPartnerProps{
    partnerUsername: string
}

export async function addPartner(addPartnerProps:AddPartnerProps){
    const response = await fetchData('api/users/addpartner', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(addPartnerProps),
    })
    return response.json()
}
export async function removePartner(){
    const response = await fetchData('api/removepartner', {
        method: 'GET'
    })
    return response.json()
}

export async function getNotes(): Promise<NoteModel[]>{
    const response = await fetchData('api/notes', {
        method: 'GET'
    })
    return response.json()
}

export interface NoteInput {
    title: string,
    text?: string
}

export async function createNote(note: NoteInput): Promise<NoteModel>{
    const response = await fetchData('api/notes/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
    })
    return response.json()
}

export async function updateNote(noteId: string ,note: NoteInput): Promise<NoteModel>{
    const response = await fetchData(`api/notes/${noteId}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
    })
    return response.json()
}

export async function deleteNote(noteId: string){
    await fetchData("/api/notes/" + noteId, { method: "POST" });
}

export async function getDraws(): Promise<DrawModel[]>{
    const response = await fetchData('api/draws', {
        method: 'GET'
    })
    return response.json()
}

export interface DrawInput {
    img: string,
}

export async function createDraw(draw: DrawInput): Promise<DrawModel>{
    const response = await fetchData('api/draws/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(draw),
    })
    return response.json()
}


export async function deleteDraw (drawId: string){
    await fetchData("/api/draws/" + drawId, { method: "POST" });
}
