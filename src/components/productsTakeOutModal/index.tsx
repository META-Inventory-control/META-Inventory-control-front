import { StyledTakeOutProductModal } from "./styles"
import { yupResolver } from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
import * as yup from "yup"
import { iProductAdd } from "../../contexts/productsContext"
import { ChangeEvent, useContext, useState } from "react"
import { ProductsContext } from "../../contexts/productsContext"
import { GroupsContext } from "../../contexts/groupsContext"

interface iSetModal {
    setShowTakeOutPrModal: (value: boolean) => void
}

interface iTakeOutProduct {
    qty: number;
}

const TakeOutProductsModal = ({setShowTakeOutPrModal}: iSetModal) => {
    const {editProduct, products} = useContext(ProductsContext)

    const takeOutProductSchema = yup.object().shape({
        qty: yup.number().required("Inserção de quantidade obrigatória"),
    })

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<iTakeOutProduct>({resolver: yupResolver(takeOutProductSchema)})

    const handleProductTakeOut = (data: any) => {
        const product = products?.find((product) => product.id === localStorage.getItem("@FOCUS_PRODUCT_ID"))
        const newObj = {qty: product?.qty! - data.qty}
        editProduct(newObj)
    }

    return (
        <StyledTakeOutProductModal>
            <main>
                <button className="closeModal" onClick={() => setShowTakeOutPrModal(false)}>X</button>
                <div>
                    <h2>Baixar estoque:</h2>
                </div>
                <form onSubmit={handleSubmit(handleProductTakeOut)}>
                    <label>Quantidade a ser retirada:</label>
                    <input type="text" placeholder={errors.qty?.message} {...register("qty")}/>
                    <button type="submit">Baixar produtos</button>
                </form>
            </main>
        </StyledTakeOutProductModal>
    )
}

export default TakeOutProductsModal