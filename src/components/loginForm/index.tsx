import { LoginDiv } from "./styles"
import { useContext } from "react"
import { ClientContext } from "../../contexts/clientContext"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { iClientLogin } from "../../contexts/clientContext"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const LoginForm = () => {
    const {clientLogin} = useContext(ClientContext)

    const navigate = useNavigate()

    const loginFormSchema = yup.object().shape({
        email: yup.string().email("Digite um email").required("Email obrigatório"),
        password: yup.string().required("Senha obrigatória")
    })

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<iClientLogin>({resolver: yupResolver(loginFormSchema)})

    const logClientIn = async (data: iClientLogin) => {
        await clientLogin(data)
        const logged = localStorage.getItem("@TOKEN")
        if (logged) {
            navigate("/dashboard")
        }
    }

    return (
        <LoginDiv>
            <main>
                <img src="./koi-fish.png" alt="" />
                <h2>Login</h2>
                <form action="" onSubmit={handleSubmit(logClientIn)}>
                    <label>E-mail:</label>
                    <input type="text" placeholder={errors.email?.message} {...register("email")}/>
                    <label>Senha:</label>
                    <input type="password" placeholder={errors.password?.message} className="passwordInput" {...register("password")}/>
                    <Link to="/register">Crie sua conta aqui</Link>
                    <button type="submit">Login</button>
                </form>
            </main>
        </LoginDiv>
    )
}

export default LoginForm