import api from "../services/api";
import { createContext, useContext, useEffect } from "react";
import { useState } from "react";
import { ReactNode } from "react";
import { toast } from "react-toastify"
import { UserContext } from "./userContext";
import { ModalsContext } from "./modalsContext";

interface iProvider {
    children: ReactNode
}

export interface iProductAdd {
    name: string,
	entry_cost: number,
	qty: number,
    group: string,
    image: File | undefined
}

export interface iProductEdit {
    name?: string,
	entry_cost?: number,
	qty?: number,
    group?: string
}

export interface iProduct {
    id: string,
	final_cost: number,
	name: string,
	entry_cost: number,
	qty: number,
	image: string,
    group: string,
    code: string
}

interface iProductContextRes {
    products: iProduct[] | null,
    populateProducts: () => Promise<void>,
    addProduct: (data: Omit<iProductAdd, "image">, file: File | undefined) => Promise<void>,
    editProduct: (data: iProductEdit) => Promise<void>,
    deleteProduct: () => Promise<void>,
    filteredProducts: iProduct[] | null,
    setFilteredProducts: (value: iProduct[] | null ) => void,
}


export const ProductsContext = createContext<iProductContextRes>({} as iProductContextRes)


export const ProductProvider = ({children}: iProvider) => {
    const [products, setProducts] = useState([] as iProduct[])
    const [filteredProducts, setFilteredProducts] = useState<iProduct[] | null>([])

    const {setShowEditModal, setShowAddModal, setShowTakeOutPrModal} = useContext(ModalsContext)

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

    const addProduct = async (data: Omit<iProductAdd, "image">, file: File | undefined): Promise<void> => {
        const token = localStorage.getItem("@TOKEN")
        try {
            const request = await api.post("/products/", {
                ...data,
                image: file
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data"
                }
            })
            setProducts([
                ...products,
                {
                    name: request.data.name,
                    entry_cost: request.data.entry_cost,
                    qty: request.data.qty,
                    image: request.data.image,
                    id: request.data.id,
                    final_cost: request.data.final_cost,
                    group: request.data.group,
                    code: request.data.code
                }
            ])
            setShowAddModal(false)
            toast.success("Produto criado!", {autoClose: 3000})
        } catch (error) {
            console.log(error)
            toast.error("Erro ao criar produto!", {autoClose: 3000})
        }
    }

    const editProduct = async (data: iProductEdit): Promise<void> => {
        const token = localStorage.getItem("@TOKEN")
        const product_id = localStorage.getItem("@FOCUS_PRODUCT_ID")
        try {
            const request = await api.patch(`/products/${product_id}/`, data, {
                headers: {Authorization: `Bearer ${token}`}
            })
            products.forEach((prod) => {
                if (prod.id === product_id) {
                    prod.name = request.data.name
                    prod.entry_cost = request.data.entry_cost
                    prod.qty = request.data.qty
                    prod.group = request.data.group
                }
            })
            setShowEditModal(false)
            setShowTakeOutPrModal(false)
            toast.success("Sucesso ao editar produto!", {autoClose: 3000})
        } catch (error) {
            console.log(error)
            toast.error("Erro ao editar produto!", {autoClose: 3000})
        }
    }

    const deleteProduct = async (): Promise<void> => {
        const token = localStorage.getItem("@TOKEN");
        const product_id = localStorage.getItem("@FOCUS_PRODUCT_ID")
        try {
            const request = await api.delete(`/products/${product_id}/`, {
                headers: {Authorization: `Bearer ${token}`}
            })
            const deletedObjArr = products.filter((prod) => prod.id !== product_id)
            setProducts(deletedObjArr)
            setShowEditModal(false)
            toast.warn("Produto deletado!", {autoClose: 3000})
        } catch (error) {
            console.log(error)
            toast.error("Erro ao deletar produto!", {autoClose: 3000})
        }
    }

    return(
        <ProductsContext.Provider value={{ products, populateProducts, addProduct, editProduct, deleteProduct, filteredProducts, setFilteredProducts}}>
            {children}
        </ProductsContext.Provider>
    )
}
