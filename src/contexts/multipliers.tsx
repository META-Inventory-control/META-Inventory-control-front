import { createContext, useState } from "react"
import { ReactNode } from "react"
import { toast } from "react-toastify"
import api from "../services/api"

interface iProvider {
    children: ReactNode
}

export interface iMultipliers {
    id: string | number,
    multi_0_50?: number,
	multi_51_150?: number,
	multi_151_700?: number,
	multi_701_1500?: number,
	multi_1501_3000?: number,
	multi_3001_6000?: number,
    multi_6001_8?: number,
}

interface iMultiplierContextRes {
    multipliers: iMultipliers,
    populateMultipliers: () => Promise<void>
    editMultipliers: (value: iMultipliers) => Promise<void>
    recalculateProducts: (value: void) => Promise<void>
}

export const MultipliersContext = createContext<iMultiplierContextRes>({} as iMultiplierContextRes)


export const MultipliersProvider = ({children}: iProvider) => {
    const [multipliers, setMultipliers] = useState<iMultipliers>({} as iMultipliers)

    const populateMultipliers = async (): Promise<void> => {
        const token = localStorage.getItem("@TOKEN")
        try {
            const request = await api.get("/multipliers/1/", {
                headers: {Authorization: `Bearer ${token}`}
            })
            setMultipliers(request.data)
        } catch (error) {
            console.log(error)
        }
    }

    const editMultipliers = async (data: iMultipliers): Promise<void> => {
        const token = localStorage.getItem("@TOKEN")
        try {
            const request = await api.patch("/multipliers/1/", data, {
                headers: {Authorization: `Bearer ${token}`}
            })
            setMultipliers(request.data)
            toast.success("Multiplicadores editados!", {autoClose: 1500})
        } catch (error) {
            toast.error("Erro ao editar multiplicadores!", {autoClose: 1500})
            console.log(error)
        }
    }

    const recalculateProducts = async (): Promise<void> => {
        const token = localStorage.getItem("@TOKEN")
        try {
            const request = await api.get("/multipliers/recalculate/", {
                headers: {Authorization: `Bearer ${token}`}
            })
            setTimeout(() => {
                toast.success("Produtos recalculados!", {autoClose: 1500})
            }, 1700)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <MultipliersContext.Provider value={{multipliers, populateMultipliers, editMultipliers, recalculateProducts}}>
            {children}
        </MultipliersContext.Provider>
    )
}