import { RegisterDiv } from "./styles"
import { useContext } from "react"
import { ClientContext } from "../../contexts/clientContext"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { iClientRegister } from "../../contexts/clientContext"
import { Link } from "react-router-dom"

const RegisterForm = () => {
    const {clientRegister} = useContext(ClientContext)

    const registerFormSchema = yup.object().shape({
        full_name: yup.string().required("Nome obrigatório"),
        email: yup.string().email("Digite um email").required("Email obrigatório"),
        password: yup.string().required("Senha obrigatória"),
        phone: yup.number().required("Numero de telefone obrigatório")
    })

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<iClientRegister>({resolver: yupResolver(registerFormSchema)})

    const createClient = (data: iClientRegister) => {
        clientRegister(data)
    }

    return (
        <RegisterDiv>
            <main>
                <img src="./koi-fish.png" alt="" />
                <h2>Crie sua conta</h2>
                <form action="" onSubmit={handleSubmit(createClient)}>
                    <label>Nome completo:</label>
                    <input type="text" placeholder={errors.full_name?.message} {...register("full_name")}/>
                    <label>E-mail:</label>
                    <input type="text" placeholder={errors.email?.message} {...register("email")}/>
                    <label>Senha:</label>
                    <input type="password" placeholder={errors.password?.message} {...register("password")}/>
                    <label>Telefone:</label>
                    <input type="text" placeholder={errors.phone?.message} className="lastInput" {...register("phone")}/>
                    <Link to="/login">Já possuí uma conta? Faça login aqui</Link>
                    <button type="submit">Criar conta</button>
                </form>
            </main>
        </RegisterDiv>
    )
}

export default RegisterForm