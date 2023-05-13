import { StyledAddModal } from "./styles"
import { yupResolver } from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
import * as yup from "yup"
import { ChangeEvent, useContext, useState } from "react"
import { iCreateUser } from "../../contexts/userContext"
import { UserContext } from "../../contexts/userContext"

interface iSetModal {
    setShowAddUserModal: (value: boolean) => void
}

const AddUserModal = ({setShowAddUserModal}: iSetModal) => {
    const {createUser} = useContext(UserContext)

    const addUserFormSchema = yup.object().shape({
        username: yup.string().required("Nome obrigatório"),
        password: yup.string().required("Senha obrigatória"),
        email: yup.string().email("O valor inserido tem que ser um e-mail").required("Email obrigatório"),
        is_superuser: yup.boolean(),
        is_operator: yup.boolean()
    })

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<iCreateUser>({resolver: yupResolver(addUserFormSchema)})

    const handleUserCreation = (data: iCreateUser) => {
        const newObj: iCreateUser = {
            username: data.username,
            password: data.password,
            email: data.email,
            is_superuser: false,
            is_operator: false
        }

        if (data.is_operator && !data.is_superuser) {
            newObj["is_superuser"] = true
            newObj["is_operator"] = true
        } else if (!data.is_operator && data.is_superuser) {
            newObj["is_superuser"] = true
        } else if (data.is_operator && data.is_superuser) {
            newObj["is_superuser"] = true
        }

        createUser(newObj)
    }

    return (
        <StyledAddModal>
            <main>
                <button className="closeModal" onClick={() => setShowAddUserModal(false)}>X</button>
                <div>
                    <h2>Criar usuário</h2>
                </div>
                <form onSubmit={handleSubmit(handleUserCreation)}>
                    <label>Username:</label>
                    <input type="text" placeholder={errors.username?.message} {...register("username")}/>
                    <label>Senha:</label>
                    <input type="text" placeholder={errors.password?.message} {...register("password")}/>
                    <label>E-mail:</label>
                    <input type="text" placeholder={errors.email?.message} className="emailInput" {...register("email")}/>
                    <div className="superUserCheckbox">
                        <div>
                            <label>Admin:</label>
                            <input type="checkbox" {...register("is_superuser")}/>
                        </div>
                        <div>
                            <label>Operador:</label>
                            <input type="checkbox" {...register("is_operator")}/>
                        </div>
                    </div>
                    <button type="submit">Criar usuário</button>
                </form>
            </main>
        </StyledAddModal>
    )
}

export default AddUserModal