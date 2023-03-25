import { StyledEditModal } from "./styles"
import * as yup from "yup"
import {useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { iClientRegister } from "../../contexts/clientContext"
import { iContactEdit } from "../../contexts/clientContext"
import { useContext } from "react"
import { ClientContext } from "../../contexts/clientContext"

interface iSetModal {
    setShowEditModal: (value: boolean) => void
}

const EditModal = ({setShowEditModal}: iSetModal) => {
    const {editContact} = useContext(ClientContext)

    const editContactFormSchema = yup.object().shape({
        full_name: yup.string().optional(),
        email: yup.string().email("Digite um email").optional(),
        phone: yup.string().optional()
    })

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<iContactEdit>({resolver: yupResolver(editContactFormSchema)})

    const handleEditObj = (data: iContactEdit) => {
        let editObj: any = {}
        Object.entries(data).forEach(([key, value]) => {
            if (value !== "") {
                editObj[key] = value
            }
        })
        editContact(editObj)
    }

    const removeFocusContactId = () => {
        localStorage.removeItem("@FOCUS_CONTACT_ID")
    }

    return (
        <StyledEditModal>
            <main>
                <button className="closeModal" onClick={() => {setShowEditModal(false), removeFocusContactId()}}>X</button>
                <div>
                    <h2>Editar contato</h2>
                    <p>Para não alteração, deixe o campo em branco.</p>
                </div>
                <form onSubmit={handleSubmit(handleEditObj)}>
                    <label>Nome completo:</label>
                    <input type="text" placeholder={errors.full_name?.message} {...register("full_name")}/>
                    <label>E-mail:</label>
                    <input type="text" placeholder={errors.email?.message} {...register("email")}/>
                    <label>Telefone:</label>
                    <input type="text" placeholder={errors.phone?.message} {...register("phone")}/>
                    <button type="submit">Salvar</button>
                </form>
            </main>
        </StyledEditModal>
    )
}

export default EditModal