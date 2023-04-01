
import { StyledDashboardMain } from "./styles/dashboard-style"
import { useEffect } from "react"
import { useContext } from "react"
import { ProductsContext } from "../contexts/productsContext"
import { UserContext } from "../contexts/userContext"
import { useNavigate } from "react-router-dom"
import { SideBar } from "../components/sideBar"
import { AdmBar } from "../components/admBar"
import { ProductsList } from "../components/productsList"
import { ModalsContext } from "../contexts/modalsContext"
import AddProductModal from "../components/addModal"
import EditModal from "../components/editModal"
import AddUserModal from "../components/createUserModal"

const Dashboard = () => {
    const {populateProducts} = useContext(ProductsContext)
    const {user} = useContext(UserContext)
    const {showAddModal, setShowAddModal, showEditModal, setShowEditModal, showAddUserModal, setShowAddUserModal} = useContext(ModalsContext)
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

                { showAddUserModal ? (
                    <AddUserModal setShowAddUserModal={setShowAddUserModal}></AddUserModal>
                ) : (
                    <></>
                )}

                { showAddModal ? (
                    <AddProductModal setShowAddModal={setShowAddModal}></AddProductModal>
                ) : (
                    <></>
                )}

                { showEditModal ? (
                    <EditModal setShowEditModal={setShowEditModal}></EditModal>
                ) : (
                    <></>
                )}

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