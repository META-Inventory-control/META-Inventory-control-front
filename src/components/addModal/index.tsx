import { StyledAddModal } from "./styles"
import { yupResolver } from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
import * as yup from "yup"
import { iClientRegister } from "../../contexts/clientContext"
import { useContext } from "react"
import { ClientContext } from "../../contexts/clientContext"

interface iSetModal {
    setShowAddModal: (value: boolean) => void
}

const AddContactModal = ({setShowAddModal}: iSetModal) => {
    const {addContact} = useContext(ClientContext)

    const addContactFormSchema = yup.object().shape({
        full_name: yup.string().required("Nome obrigatório"),
        email: yup.string().email("Digite um email").required("Email obrigatório"),
        phone: yup.number().required("Numero de telefone obrigatório")
    })

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<Omit<iClientRegister, "password">>({resolver: yupResolver(addContactFormSchema)})

    const createContact = (data: Omit<iClientRegister, "password">) => {
        addContact(data)
    }

    return (
        <StyledAddModal>
            <main>
                <button className="closeModal" onClick={() => setShowAddModal(false)}>X</button>
                <div>
                    <h2>Criar contato</h2>
                </div>
                <form onSubmit={handleSubmit(createContact)}>
                    <label>Nome completo:</label>
                    <input type="text" placeholder={errors.full_name?.message} {...register("full_name")}/>
                    <label>E-mail:</label>
                    <input type="text" placeholder={errors.email?.message} {...register("email")}/>
                    <label>Telefone:</label>
                    <input type="text" placeholder={errors.phone?.message} {...register("phone")}/>
                    <button type="submit">Criar contato</button>
                </form>
            </main>
        </StyledAddModal>
    )
}

export default AddContactModal