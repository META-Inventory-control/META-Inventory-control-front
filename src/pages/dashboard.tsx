
import { StyledDashboardMain } from "./styles/dashboard-style"
import { useEffect } from "react"
import { useContext } from "react"
import { ProductsContext } from "../contexts/productsContext"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
    const {populateProducts} = useContext(ProductsContext)
    const navigate = useNavigate()

    
    useEffect(() => {
        const token = localStorage.getItem("@TOKEN")
        if (token) {
            populateProducts()
        } else {
            localStorage.clear()
            navigate("/login")
        }
    }, [])

    return (
        <StyledDashboardMain>
            <div className="a">Side div</div>
            <div className="b">
                Content
                <div className="c">Header</div>
            </div>
        </StyledDashboardMain>
    )
}

export {Dashboard}