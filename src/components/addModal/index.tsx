import { StyledAddProductModal } from "./styles"
import { yupResolver } from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
import * as yup from "yup"
import { iProductAdd } from "../../contexts/productsContext"
import { ChangeEvent, useContext, useState } from "react"
import { ProductsContext } from "../../contexts/productsContext"
import { GroupsContext } from "../../contexts/groupsContext"

interface iSetModal {
    setShowAddModal: (value: boolean) => void
}

const AddProductModal = ({setShowAddModal}: iSetModal) => {
    const [file, setFile] = useState<File>()
    const [loading, setLoading] = useState(false)
    const {addProduct} = useContext(ProductsContext)
    const {groups} = useContext(GroupsContext)

    const addProductsFormSchema = yup.object().shape({
        name: yup.string().max(35, "Nome maior que 35 caracteres.").required("Nome obrigatório"),
        entry_cost: yup.number().required("Inserção de valor de custo obrigatório"),
        qty: yup.number().required("Inserção de quantidade obrigatória"),
        min_qty: yup.number().required("Inserção de quantidade minima obrigatória"),
        description: yup.string().max(220, "Nome maior que 220 caracteres.").optional(),
        group: yup.string().required("Inserção de grupo obrigatória")
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


    const createProduct = (data: any) => {
        const newObj = {
            ...data
        }
        addProduct(newObj, file)
    }

    return (
        <StyledAddProductModal>
            <main>
                <button className="closeModal" onClick={() => setShowAddModal(false)}>X</button>
                <div>
                    <h2>Criar produto</h2>
                </div>
                <form onSubmit={handleSubmit(createProduct)}>
                    
                    {errors.name ? (<span>{errors.name.message}</span>) : (<label>Nome</label>)}
                    <input type="text" placeholder={errors.name?.message} {...register("name")}/>
                    <label>Valor de custo:</label>
                    <input type="text" placeholder={errors.entry_cost?.message} {...register("entry_cost")}/>
                    <div className="setQtyDiv">
                        <div>
                            <label>Quantidade:</label>
                            <input type="text" placeholder={errors.qty?.message} {...register("qty")}/>
                        </div>
                        <div>
                            <label>Min qtd:</label>
                            <input type="text" placeholder={errors.min_qty?.message} {...register("min_qty")}/>
                        </div>
                        <div>
                            <label>Grupo:</label>
                            <select id="" {...register("group")}>
                                <option value="" disabled selected>Selecionar</option>
                                { groups ? (
                                    groups.map((group) => <option key={group.id} value={group.id}>{group.group_name}</option>)
                                ) : (
                                    <option disabled value="">Não há grupos</option>
                                )}
                            </select>
                        </div>
                    </div>
                    
                    <label>Descrição:</label>
                    <input type="text" placeholder={errors.description?.message} {...register("description")}/>
                    <label>Imagem:</label>
                    <input type="file" id="file" placeholder="Arraste uma imagem" accept=".png,.jpg,.jpeg" className="inputFile" onChange={handleImageChange}/>
                    { loading ? (
                        <button type="submit" className="loadingButton">Processando produto...</button>
                    ) : (
                        <button type="submit" onClick={() => setLoading(true)}>Adicionar produto</button>
                    )}
                </form>
            </main>
        </StyledAddProductModal>
    )
}

export default AddProductModal