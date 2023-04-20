import { createContext, useState } from "react"
import { ReactNode } from "react"
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

    return(
        <GroupsContext.Provider value={{groups, populateGroups}}>
            {children}
        </GroupsContext.Provider>
    )
}