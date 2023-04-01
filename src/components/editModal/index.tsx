import { StyledEditModal } from "./styles"
import * as yup from "yup"
import {useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useContext } from "react"
import { ProductsContext } from "../../contexts/productsContext"
import { iProductEdit } from "../../contexts/productsContext"

interface iSetModal {
    setShowEditModal: (value: boolean) => void
}

const EditModal = ({setShowEditModal}: iSetModal) => {
    const {editProduct, deleteProduct} = useContext(ProductsContext)

    const editProductFormSchema = yup.object().shape({
        name: yup.string().optional(),
        entry_cost: yup.string().optional(),
        qty: yup.string().optional()
    })

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<iProductEdit>({resolver: yupResolver(editProductFormSchema)})

    const handleEditObj = (data: iProductEdit) => {
        let editObj: any = {}
        Object.entries(data).forEach(([key, value]) => {
            if (value !== "") {
                editObj[key] = value
            }
        })
        if (editObj.entry_cost) {
            editObj.entry_cost = parseInt(editObj.entry_cost)
        }
        if (editObj.qty) {
            editObj.qty = parseInt(editObj.qty)
        }
        editProduct(editObj)
    }

    const removeFocusProductId = () => {
        localStorage.removeItem("@FOCUS_PRODUCT_ID")
    }

    return (
        <StyledEditModal>
            <main>
                <button className="closeModal" onClick={() => {setShowEditModal(false), removeFocusProductId()}}>X</button>
                <div>
                    <h2>Editar contato</h2>
                    <p>Para não alteração, deixe o campo em branco.</p>
                </div>
                <form onSubmit={handleSubmit(handleEditObj)}>
                    <label>Nome:</label>
                    <input type="text" placeholder={errors.name?.message} {...register("name")}/>
                    <label>Valor de custo:</label>
                    <input type="text" placeholder={errors.entry_cost?.message} {...register("entry_cost")}/>
                    <label>Quantidade:</label>
                    <input type="text" placeholder={errors.qty?.message} {...register("qty")}/>
                    <button type="submit">Salvar</button>
                </form>
                <button onClick={() => deleteProduct()}>Deletar produto</button>
            </main>
        </StyledEditModal>
    )
}

export default EditModal