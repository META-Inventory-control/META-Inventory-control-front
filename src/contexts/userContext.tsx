import api from "../services/api";
import { createContext } from "react";
import { useState } from "react";
import { ReactNode } from "react";
import { decodeToken } from "react-jwt";

export interface iUserLogin {
    username: string,
    password: string
}

export interface iUser {
    id: string,
    is_superuser: boolean,
    username: string,
    email: string
}

interface iProvider {
    children: ReactNode
}

interface iUserContextRes {
    user: iUser | null,
    userLogin: (data: iUserLogin) => Promise<void>
}

export const UserContext = createContext<iUserContextRes>({} as iUserContextRes)

export const UserProvider = ({children}: iProvider) => {
    const [user, setUser] = useState<iUser | null>(null)

    const userLogin = async (data: iUserLogin): Promise<void> => {
        try {
            const request = await api.post("/login/", data)
            localStorage.setItem("@TOKEN", request.data.access);
            const decodedToken:any = decodeToken(request.data.access)
            populateUser(decodedToken.user_id)
        } catch (error) {
            console.log(error)
        }
    }

    const populateUser = async (user_id: string): Promise<void> => {
        const token = localStorage.getItem("@TOKEN")
        try {
            const request = await api.get(`/users/${user_id}/`, {
                headers: {Authorization: `Bearer ${token}`}
            })
            const userObj = {
                id: request.data.id,
                is_superuser: request.data.is_superuser,
                username: request.data.username,
                email: request.data.email
            }
            setUser(userObj)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <UserContext.Provider value={{user, userLogin}}>
            {children}
        </UserContext.Provider>
    )
} 