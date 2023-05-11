import { StyledTakeOutProductModal } from "./styles"
import { yupResolver } from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
import * as yup from "yup"
import { iProductAdd } from "../../contexts/productsContext"
import { ChangeEvent, useContext, useState } from "react"
import { ProductsContext } from "../../contexts/productsContext"
import { GroupsContext } from "../../contexts/groupsContext"
import { HistoricContext } from "../../contexts/historicContext"
import { toast } from "react-toastify"

interface iSetModal {
    setShowTakeOutPrModal: (value: boolean) => void
    showAside: boolean
}

interface iTakeOutProduct {
    qty: number
    client: string
    applicant: string
}

const TakeOutProductsModal = ({setShowTakeOutPrModal, showAside}: iSetModal) => {
    const {products} = useContext(ProductsContext)
    const {TakeOutProductsAndCreateHistoricEntry} = useContext(HistoricContext)

    const takeOutProductSchema = yup.object().shape({
        qty: yup.number().required("Inserção de quantidade obrigatória"),
        client: yup.string().required("Insira o nome do cliente"),
        applicant: yup.string().required("Insira o nome do solicitante")
    })

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<iTakeOutProduct>({resolver: yupResolver(takeOutProductSchema)})

    const handleProductTakeOut = (data: iTakeOutProduct) => {
        const product = products?.find((product) => product.id === localStorage.getItem("@FOCUS_PRODUCT_ID"))
        if (product!.qty < data.qty) {
            toast.warn("Qtd inserida maior que a qtd de produtos disponíveis.", {autoClose: 3000})
        } else {
            const newObj: any = {
                qty: data.qty,
                client: data.client,
                applicant: data.applicant,
                createdBy: localStorage.getItem("@USER_ID"),
                product: localStorage.getItem("@FOCUS_PRODUCT_ID")
            }
            TakeOutProductsAndCreateHistoricEntry(newObj)
        }
    }

    return (
        <StyledTakeOutProductModal set_width={ !showAside ? "100%" : "80%"}>
            <main>
                <button className="closeModal" onClick={() => setShowTakeOutPrModal(false)}>X</button>
                <div>
                    <h2>Baixar estoque:</h2>
                </div>
                <form onSubmit={handleSubmit(handleProductTakeOut)}>
                    <label>Quantidade a ser retirada:</label>
                    <input type="text" placeholder={errors.qty?.message} {...register("qty")}/>
                    
                    <label>Cliente:</label>
                    <input type="text" placeholder={errors.client?.message} {...register("client")}/>

                    <label>Solicitante:</label>
                    <input type="text" placeholder={errors.applicant?.message} {...register("applicant")}/>
                    
                    <button type="submit">Baixar produtos</button>
                </form>
            </main>
        </StyledTakeOutProductModal>
    )
}

export default TakeOutProductsModal