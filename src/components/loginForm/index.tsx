import { LoginDiv } from "./styles"
import { useContext } from "react"
import { UserContext } from "../../contexts/userContext"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import { iUserLogin } from "../../contexts/userContext"
import { useNavigate } from "react-router-dom"

const LoginForm = () => {
    const {userLogin} = useContext(UserContext)

    const navigate = useNavigate()

    const loginFormSchema = yup.object().shape({
        username: yup.string().required("Username obrigatório"),
        password: yup.string().required("Senha obrigatória")
    })

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<iUserLogin>({resolver: yupResolver(loginFormSchema)})

    const logClientIn = async (data: iUserLogin) => {
        await userLogin(data)
        const logged = localStorage.getItem("@TOKEN")
        if (logged) {
            navigate("/dashboard")
        }
    }

    return (
        <LoginDiv>
            <main>
                <img src="./image.png" alt="" />
                <h2>Login</h2>
                <form action="" onSubmit={handleSubmit(logClientIn)}>
                    <label>Username:</label>
                    <input type="text" placeholder={errors.username?.message} {...register("username")}/>
                    <label>Senha:</label>
                    <input type="password" placeholder={errors.password?.message} className="passwordInput" {...register("password")}/>
                    <button type="submit">Login</button>
                </form>
            </main>
        </LoginDiv>
    )
}

export default LoginForm