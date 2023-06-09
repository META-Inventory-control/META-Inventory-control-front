import api from "../services/api";
import { createContext, useContext, useId } from "react";
import { useState } from "react";
import { ReactNode } from "react";
import { decodeToken } from "react-jwt";
import {toast} from "react-toastify"
import { ModalsContext } from "./modalsContext";

export interface iUserLogin {
    username: string,
    password: string
}

export interface iUser {
    id: string,
    is_superuser: boolean,
    username: string,
    email: string,
    is_operator: boolean
}

export interface iUserEdit {
    password?: string,
    username?: string,
    email?: string
}

export interface iCreateUser {
    is_superuser?: boolean,
    is_operator?: boolean,
    username: string,
    email: string,
    password: string
}

interface iProvider {
    children: ReactNode
}

interface iUserContextRes {
    user: iUser | null,
    userList: iUser[] | null,
    userLogin: (data: iUserLogin) => Promise<void>,
    createUser: (data: iCreateUser) => Promise<void>,
    editUser: (data: iUserEdit) => Promise<void>,
    populateUser: (user_id: string) => Promise<void>,
    listAllUsers: () => Promise<void>,
    deleteUser: (userId: string) => Promise<void>
}

export const UserContext = createContext<iUserContextRes>({} as iUserContextRes)

export const UserProvider = ({children}: iProvider) => {
    const [user, setUser] = useState<iUser | null>(null)
    const [userList, setUserList] = useState<iUser[] | null>(null)
    const {setShowAddUserModal, setShowEditUserModal} = useContext(ModalsContext)

    const userLogin = async (data: iUserLogin): Promise<void> => {
        try {
            const request = await api.post("/login/", data)
            window.localStorage.setItem("@TOKEN", request.data.access);
            const decodedToken:any = decodeToken(request.data.access)
            populateUser(decodedToken.user_id)
            window.localStorage.setItem("@USER_ID", decodedToken.user_id);
            toast.success("Login bem sucedido!", {autoClose: 1500})
        } catch (error) {
            console.log(error)
            toast.error("Credenciais incorretas!", {autoClose: 1500})
        }
    }

    const populateUser = async (user_id: string): Promise<void> => {
        const token = window.localStorage.getItem("@TOKEN")
        try {
            const request = await api.get(`/users/${user_id}/`, {
                headers: {Authorization: `Bearer ${token}`}
            })
            const userObj = {
                id: request.data.id,
                is_superuser: request.data.is_superuser,
                username: request.data.username,
                email: request.data.email,
                is_operator: request.data.is_operator
            }
            setUser(userObj)
        } catch (error) {
            console.log(error)
        }
    }

    const createUser = async (data: iCreateUser): Promise<void> => {
        const token = window.localStorage.getItem("@TOKEN")
        try {
            const request = await api.post(`/users/create/`, data, {
                headers: {Authorization: `Bearer ${token}`}
            })
            setShowAddUserModal(false)
            toast.success("Usuário criado!", {autoClose: 1500})
        } catch (error) {
            console.log(error)
            toast.error("Erro ao criar usuário!", {autoClose: 1500})
        }
    }

    const editUser = async (data: iUserEdit): Promise<void> => {
        const token = window.localStorage.getItem("@TOKEN")
        try {
            const request = await api.patch(`/users/${user?.id}/`, data, {
                headers: {Authorization: `Bearer ${token}`}
            })
            setShowEditUserModal(false)
            toast.success("Sucesso ao editar usuário!", {autoClose: 1500})
        } catch (error) {
            console.log(error)
            toast.error("Erro ao editar usuário!", {autoClose: 1500})
        }
    }

    const deleteUser = async (userId:string): Promise<void> => {
        const token = localStorage.getItem("@TOKEN")
        try {
            const request = await api.delete(`/users/${userId}/`, {
                headers: {Authorization: `Bearer ${token}`}
            })
            toast.success("Usuario deletado com sucesso", {autoClose:1500})
            listAllUsers()
        } catch (error) {
            console.log(error)
        }
    }

    const listAllUsers = async (): Promise<void> => {
        const token = localStorage.getItem("@TOKEN")
        try {
            const request = await api.get(`/users/list/`, {
                headers: {Authorization: `Bearer ${token}`}
            })
            setUserList(request.data)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <UserContext.Provider value={{deleteUser, userList,listAllUsers, user, userLogin, createUser, editUser, populateUser}}>
            {children}
        </UserContext.Provider>
    )
} 