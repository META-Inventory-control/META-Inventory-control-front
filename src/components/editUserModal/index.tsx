import { StyledEditModal } from "./styles"
import * as yup from "yup"
import {useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { iUserEdit } from "../../contexts/userContext"
import { useContext } from "react"
import { UserContext } from "../../contexts/userContext"

interface iSetModal {
    setShowEditUserModal: (value: boolean) => void
}

const EditUserModal = ({setShowEditUserModal}: iSetModal) => {
    const {user, editUser} = useContext(UserContext)

    const editUserFormSchema = yup.object().shape({
        username: yup.string().optional(),
        password: yup.string().optional(),
        email: yup.string().email("O valor inserido tem que ser um email").optional()
    })

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<iUserEdit>({resolver: yupResolver(editUserFormSchema)})

    const handleEditObj = (data: iUserEdit) => {
        let editObj: any = {}
        Object.entries(data).forEach(([key, value]) => {
            if (value !== "") {
                editObj[key] = value
            }
        })
        editUser(editObj)
    }

    return (
        <StyledEditModal>
            <main>
                <button className="closeModal" onClick={() => setShowEditUserModal(false)}>X</button>
                <div>
                    <h2>Editar seu usuário</h2>
                    <p>Para não alteração, deixe o campo em branco.</p>
                </div>
                <form onSubmit={handleSubmit(handleEditObj)}>
                    <label>Username:</label>
                    <input type="text" placeholder={errors.username?.message} {...register("username")} defaultValue={user?.username}/>
                    <label>Senha:</label>
                    <input type="text" placeholder={errors.password?.message} {...register("password")} />
                    <label>E-mail:</label>
                    <input type="text" placeholder={errors.email?.message} {...register("email")} defaultValue={user?.email ? (user.email) : ("example@mail.com")}/>
                    <button type="submit">Salvar</button>
                </form>
            </main>
        </StyledEditModal>
    )
}

export default EditUserModal