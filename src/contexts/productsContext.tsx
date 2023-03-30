import api from "../services/api";
import { createContext, useEffect } from "react";
import { useState } from "react";
import { ReactNode } from "react";

interface iProvider {
    children: ReactNode
}

interface iProduct {
    id: string,
	final_cost: number,
	name: string,
	entry_cost: number,
	qty: number,
	image: string
}

interface iProductContextRes {
    products: iProduct[] | null,
    populateProducts: () => Promise<void>
}


export const ProductsContext = createContext<iProductContextRes>({} as iProductContextRes)


export const ProductProvider = ({children}: iProvider) => {
    const [products, setProducts] = useState<iProduct[] | null>(null)

    const populateProducts = async (): Promise<void> => {
        const token = localStorage.getItem("@TOKEN")
        try {
            const request = await api.get("/products/", {
                headers: {Authorization: `Bearer ${token}`}
            })
            setProducts(request.data)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <ProductsContext.Provider value={{products, populateProducts}}>
            {children}
        </ProductsContext.Provider>
    )
}
