import LoginForm from "../components/loginForm"
import { useEffect } from "react"


const LoginPage = () => {

    useEffect(() => {
        localStorage.clear()
    }, [])

    return (
        <>
            <LoginForm></LoginForm>
        </>
    )
}

export default LoginPage