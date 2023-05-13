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
	client: string,
    applicant: string,
	qty: number,
	createdAt: string,
    createdBy: any,
	product: string
}

interface iHistoryContextRes {
    historicEntries: iHistoricEntry[] | null
    TakeOutProductsAndCreateHistoricEntry: (data: Omit<iHistoricEntry, "id" | "createdAt">) => Promise<void>,
    PopulateHistoricEntries: () => Promise<void>
    FilteredHistoricEntries: iHistoricEntry[] | null,
    populateFilteredHistoricEntries: (product_id: string) => Promise<void>
    setFilteredHistoricEntries: (value: iHistoricEntry[]) => void
}

export const HistoricContext = createContext<iHistoryContextRes>({} as iHistoryContextRes)


export const HistoricProvider = ({children}: iProvider) => {
    const [historicEntries, setHistoricEntries] = useState([] as iHistoricEntry[])
    const [FilteredHistoricEntries, setFilteredHistoricEntries] = useState([] as iHistoricEntry[])

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
            toast.success("Baixa concluída!", {autoClose: 1500})
            setShowTakeOutPrModal(false)
        } catch (error) {
            toast.error("Erro ao baixar produto", {autoClose: 1500})
        }
    }

    const PopulateHistoricEntries = async (): Promise<void> => {
        const token = localStorage.getItem("@TOKEN")
        try {
            const request = await api.get("/historic/", {
                headers: {Authorization: `Bearer ${token}`}
            })
            const sortedByDate =  request.data.sort((a: any, b: any) => {
                const dateA = new Date(a.createdAt).getTime();
                const dateB = new Date(b.createdAt).getTime();
                return dateB - dateA;
            });
            const newArr: iHistoricEntry[] = []
            sortedByDate.forEach((entry: iHistoricEntry) => {
                const date = new Date(entry.createdAt);
                const options: any = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
                const formattedDate = new Intl.DateTimeFormat('pt-PT', options).format(date);
                const newObj = {
                    id: entry.id,
                    client: entry.client,
                    applicant: entry.applicant,
                    qty: entry.qty,
                    createdAt: formattedDate,
                    createdBy: entry.createdBy,
                    product: entry.product,
                }
                newArr.push(newObj)
            })
            setHistoricEntries(newArr)
        } catch (error) {
            toast.error("Erro ao coletar baixas", {autoClose: 1500})
        }
    }

    const populateFilteredHistoricEntries = async (product_id: string): Promise<void> => {
        const token = localStorage.getItem("@TOKEN")
        try {
            const request = await api.get(`/historic/${product_id}/`, {
                headers: {Authorization: `Bearer ${token}`}
            })
            const sortedByDate =  request.data.sort((a: any, b: any) => {
                const dateA = new Date(a.createdAt).getTime();
                const dateB = new Date(b.createdAt).getTime();
                return dateB - dateA;
            });
            const newArr: iHistoricEntry[] = []
            sortedByDate.forEach((entry: iHistoricEntry) => {
                const date = new Date(entry.createdAt);
                const options: any = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
                const formattedDate = new Intl.DateTimeFormat('pt-PT', options).format(date);
                const newObj = {
                    id: entry.id,
                    client: entry.client,
                    applicant: entry.applicant,
                    qty: entry.qty,
                    createdAt: formattedDate,
                    createdBy: entry.createdBy,
                    product: entry.product,
                }
                newArr.push(newObj)
            })
            setFilteredHistoricEntries(newArr)
        } catch (error) {
            toast.error("Erro ao coletar baixas", {autoClose: 1500})
        }
    }

    return (
        <HistoricContext.Provider value={{historicEntries, TakeOutProductsAndCreateHistoricEntry, PopulateHistoricEntries,
        FilteredHistoricEntries, setFilteredHistoricEntries, populateFilteredHistoricEntries}}>
            {children}
        </HistoricContext.Provider>
    )
}