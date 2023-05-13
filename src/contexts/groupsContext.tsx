import { createContext, useState } from "react"
import { ReactNode } from "react"
import { toast } from "react-toastify"
import api from "../services/api"

interface iProvider {
    children: ReactNode
}

interface iGroup {
    id: string,
    group_name: string
}

interface iGroupContextRes {
    groups: iGroup[],
    populateGroups: () => Promise<void>
    createGroups: (data: any) => Promise<void>
    deleteGroups: (groupId: string) => Promise<void>
    patchGroups: (data: any, groupId: string) => Promise<void>
}

export const GroupsContext = createContext<iGroupContextRes>({} as iGroupContextRes)


export const GroupProvider = ({children}: iProvider) => {
    const [groups, setGroups] = useState<iGroup[]>([])

    const populateGroups = async (): Promise<void> => {
        const token = localStorage.getItem("@TOKEN")
        try {
            const request = await api.get("/groups/", {
                headers: {Authorization: `Bearer ${token}`}
            })
            setGroups(request.data)
        } catch (error) {
            console.log(error)
        }
    }

    const createGroups = async (data:any):Promise<void> =>{
        const token = localStorage.getItem("@TOKEN")
        try {
            const request = await api.post("/groups/", data, {
                headers: {Authorization: `Bearer ${token}`}
            })
            setGroups([...groups, request.data])
            toast.success("Grupo criado com sucesso", {autoClose:1500})
        } catch (error) {
            console.log(error)
        }
    }

    const deleteGroups = async (groupId:string):Promise<void> =>{
        const token = localStorage.getItem("@TOKEN")
        try {
            const request = await api.delete(`/groups/${groupId}/`, {
                headers: {Authorization: `Bearer ${token}`}
            })
            const arrayFilter = groups.filter((group)=> group.id !== groupId)
            setGroups(arrayFilter)
            toast.success("Grupo deletado com sucesso", {autoClose:1500})
        } catch (error) {
            toast.error("Erro ao deletar grupo", {autoClose:1500})
            console.log(error)
        }
    }

    const patchGroups = async (data:any, groupId: string):Promise<void> => {
        const token = localStorage.getItem("@TOKEN")
        try {
            const request = await api.patch(`/groups/${groupId}/`,data, {
                headers: {Authorization: `Bearer ${token}`}
            })
            console.log(request)
            const arrayFilter = groups.filter((group)=> group.id !== groupId)
            setGroups([...arrayFilter, request.data])
            toast.success("Grupo atualizado com sucesso", {autoClose:1500})
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <GroupsContext.Provider value={{groups, populateGroups, createGroups, deleteGroups, patchGroups}}>
            {children}
        </GroupsContext.Provider>
    )
}