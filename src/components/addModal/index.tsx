import { StyledAddProductModal } from "./styles"
import { yupResolver } from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
import * as yup from "yup"
import { iProductAdd } from "../../contexts/productsContext"
import { ChangeEvent, useContext, useState } from "react"
import { ProductsContext } from "../../contexts/productsContext"

interface iSetModal {
    setShowAddModal: (value: boolean) => void
}

const AddProductModal = ({setShowAddModal}: iSetModal) => {
    const [file, setFile] = useState<File>()
    const {addProduct} = useContext(ProductsContext)

    const addProductsFormSchema = yup.object().shape({
        name: yup.string().required("Nome obrigatório"),
        entry_cost: yup.number().required("Inserção de valor de custo obrigatório"),
        qty: yup.number().required("Inserção de quantidade obrigatória"),
    })

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<Omit<iProductAdd, "image">>({resolver: yupResolver(addProductsFormSchema)})

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0])
        }
    }

    const createProduct = (data: Omit<iProductAdd, "image">) => {
        const newObj = {
            ...data,
            image: file
        }
        addProduct(newObj)
    }

    return (
        <StyledAddProductModal>
            <main>
                <button className="closeModal" onClick={() => setShowAddModal(false)}>X</button>
                <div>
                    <h2>Criar produto</h2>
                </div>
                <form onSubmit={handleSubmit(createProduct)}>
                    <label>Nome:</label>
                    <input type="text" placeholder={errors.name?.message} {...register("name")}/>
                    <label>Preço de custo:</label>
                    <input type="text" placeholder={errors.entry_cost?.message} {...register("entry_cost")}/>
                    <label>Quantidade:</label>
                    <input type="text" placeholder={errors.qty?.message} {...register("qty")}/>
                    <label>Imagem:</label>
                    <input type="file" id="file" placeholder="Arraste uma imagem" accept=".png,.jpg,.jpeg" className="inputFile" onChange={handleImageChange}/>
                    <button type="submit">Adicionar produto</button>
                </form>
            </main>
        </StyledAddProductModal>
    )
}

export default AddProductModal