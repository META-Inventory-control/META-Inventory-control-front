
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
import { SearchBar } from "../components/searchBar"
import EditUserModal from "../components/editUserModal"
import { decodeToken } from "react-jwt"
import { GroupsContext } from "../contexts/groupsContext"

const Dashboard = () => {
    const {populateProducts} = useContext(ProductsContext)
    const {user, populateUser} = useContext(UserContext)
    const {populateGroups, groups} = useContext(GroupsContext)

    const {showAddModal, setShowAddModal, showEditModal, setShowEditModal,
    showAddUserModal, setShowAddUserModal, showEditUserModal, setShowEditUserModal} = useContext(ModalsContext)

    const navigate = useNavigate()

    useEffect(() => {
        const user_id = window.localStorage.getItem("@USER_ID")
        const token = window.localStorage.getItem("@TOKEN")
        if (token && user_id) {
            const decodedToken: any = decodeToken(token)
            if (decodedToken) {
                populateUser(user_id)
                populateProducts()
                populateGroups()
            } else {
                localStorage.clear()
                navigate("/login")
            }
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

                { showEditUserModal ? (
                    <EditUserModal setShowEditUserModal={setShowEditUserModal}></EditUserModal>
                ) : (
                    <></>
                )}


                { user?.is_superuser ? (
                    <div className="admContainer"><AdmBar></AdmBar></div>
                ) : (
                    <></>
                )}
                <div className="contentContainer">
                    <SearchBar></SearchBar>
                    <ProductsList></ProductsList>
                </div>
            </div>
        </StyledDashboardMain>
    )
}

export {Dashboard}

//<SideBar></SideBar>