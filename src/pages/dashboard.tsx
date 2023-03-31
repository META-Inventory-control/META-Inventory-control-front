
import { StyledDashboardMain } from "./styles/dashboard-style"
import { useEffect } from "react"
import { useContext } from "react"
import { ProductsContext } from "../contexts/productsContext"
import { UserContext } from "../contexts/userContext"
import { useNavigate } from "react-router-dom"
import { SideBar } from "../components/sideBar"
import { AdmBar } from "../components/admBar"
import { ProductsList } from "../components/productsList"

const Dashboard = () => {
    const {populateProducts} = useContext(ProductsContext)
    const {user} = useContext(UserContext)
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
            <div className="sideBarContainer">
                <SideBar></SideBar>
            </div>
            <div className="mainContainer">
                { user?.is_superuser ? (
                    <div className="admContainer"><AdmBar></AdmBar></div>
                ) : (
                    <></>
                )}
                <div className="contentContainer">
                    <ProductsList></ProductsList>
                </div>
            </div>
        </StyledDashboardMain>
    )
}

export {Dashboard}

//<SideBar></SideBar>