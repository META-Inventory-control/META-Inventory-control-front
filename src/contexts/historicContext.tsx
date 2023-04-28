import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";
import api from "../services/api";
import { toast } from "react-toastify"
import { ModalsContext } from "./modalsContext";
import { ProductsContext } from "./productsContext";

interface iProvider {
    children: ReactNode
}

interface iHistoricEntry {
    id: string,
	description: string,
	qty: number,
	createdAt: Date,
    createdBy: any,
	product: string,
}

interface iHistoryContextRes {
    historicEntries: iHistoricEntry[] | null
    TakeOutProductsAndCreateHistoricEntry: (data: Omit<iHistoricEntry, "id" | "createdAt">) => Promise<void>
}

export const HistoricContext = createContext<iHistoryContextRes>({} as iHistoryContextRes)


export const HistoricProvider = ({children}: iProvider) => {
    const [historicEntries, setHistoricEntries] = useState([] as iHistoricEntry[])

    const {setShowTakeOutPrModal} = useContext(ModalsContext)
    const {products} = useContext(ProductsContext)

    const TakeOutProductsAndCreateHistoricEntry = async (data: Omit<iHistoricEntry, "id" | "createdAt">): Promise<void> => {
        const token = localStorage.getItem("@TOKEN")
        try {
            const request = await api.post("/historic/", data, {
                headers: {Authorization: `Bearer ${token}`}
            })
            products!.forEach((prod) => {
                if (prod.id === request.data.product) {
                    prod.qty = prod.qty - request.data.qty
                }
            })
            toast.success("Baixa concluída!", {autoClose: 3000})
            setShowTakeOutPrModal(false)
        } catch (error) {
            toast.error("Erro ao baixar produto", {autoClose: 3000})
        }
    }

    return (
        <HistoricContext.Provider value={{historicEntries, TakeOutProductsAndCreateHistoricEntry}}>
            {children}
        </HistoricContext.Provider>
    )
}