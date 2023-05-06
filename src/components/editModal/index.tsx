import { StyledEditModal } from "./styles"
import * as yup from "yup"
import {useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useContext, useState } from "react"
import { ProductsContext } from "../../contexts/productsContext"
import { iProductEdit } from "../../contexts/productsContext"
import { GroupsContext } from "../../contexts/groupsContext"

interface iSetModal {
    setShowEditModal: (value: boolean) => void
}

const EditModal = ({setShowEditModal}: iSetModal) => {
    const {editProduct, deleteProduct} = useContext(ProductsContext)
    const {products} = useContext(ProductsContext)
    const {groups} = useContext(GroupsContext)

    const [editFinalValue, setEditFinalValue] = useState(false)

    const product = products?.find((prod) => prod.id === localStorage.getItem("@FOCUS_PRODUCT_ID"))

    const editProductFormSchema = yup.object().shape({
        name: yup.string().optional(),
        entry_cost: yup.string().optional(),
        final_cost: yup.string().optional(),
        qty: yup.string().optional(),
        group: yup.string().optional()
    })

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<iProductEdit>({resolver: yupResolver(editProductFormSchema)})

    const handleEditObj = (data: iProductEdit) => {
        const prod = products?.find((prod) => prod.id === localStorage.getItem("@FOCUS_PRODUCT_ID"))
        let editObj: any = {}
        console.log(editObj)
        Object.entries(data).forEach(([key, value]) => {
            if (key === "entry_cost" && value === prod?.entry_cost) {
                return
            } else if (value !== "") {
                editObj[key] = value
            }
        })
        if (editObj.entry_cost) {
            editObj.entry_cost = parseInt(editObj.entry_cost)
        }
        if (editObj.final_cost) {
            editObj.final_cost = parseInt(editObj.final_cost)
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
                    <h2>Editar produto</h2>
                </div>
                <form onSubmit={handleSubmit(handleEditObj)}>
                    <label>Nome:</label>
                    <input type="text" placeholder={errors.name?.message} {...register("name")} defaultValue={product?.name}/>
                    <label>Valor de custo:</label>
                    <input type="text" placeholder={errors.entry_cost?.message} {...register("entry_cost")} defaultValue={product?.entry_cost}/>
                    <label className="enableFinalCostEdition">Editar valor final:
                        <input type="checkbox" onChange={(e) => setEditFinalValue(e.target.checked)}/>
                    </label>
                    <input type="text" placeholder={errors.final_cost?.message} {...register("final_cost")} defaultValue={product?.final_cost} disabled={!editFinalValue}/>
                    <label>Quantidade:</label>
                    <input type="text" placeholder={errors.qty?.message} {...register("qty")} defaultValue={product?.qty}/>
                    <label>Grupo:</label>
                    <select id="" {...register("group")}>
                        <option value="" disabled selected>Manter mesmo grupo</option>
                        { groups ? (
                            groups.map((group) => <option key={group.id} value={group.id}>{group.group_name}</option>)
                        ) : (
                            <option disabled value="">Não há grupos</option>
                        )}
                    </select>
                    <button type="submit">Salvar</button>
                </form>
                <button onClick={() => deleteProduct()} className="deleteBtn">Deletar produto</button>
            </main>
        </StyledEditModal>
    )
}

export default EditModal