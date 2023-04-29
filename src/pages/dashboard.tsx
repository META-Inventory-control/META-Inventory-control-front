
import { StyledApplicationMain } from "./styles/dashboard-style"
import { useEffect } from "react"
import { useContext } from "react"
import { ProductsContext } from "../contexts/productsContext"
import { UserContext } from "../contexts/userContext"
import { useNavigate } from "react-router-dom"
import { SideBar } from "../components/sideBar"
import { ProductsList } from "../components/productsList"
import { ModalsContext } from "../contexts/modalsContext"
import AddProductModal from "../components/addModal"
import EditModal from "../components/editModal"
import AddUserModal from "../components/createUserModal"
import { SearchBar } from "../components/searchBar"
import EditUserModal from "../components/editUserModal"
import { decodeToken } from "react-jwt"
import { GroupsContext } from "../contexts/groupsContext"
import { GroupsModal } from "../components/groupsModal"
import { UserModal } from "../components/userModal"
import TakeOutProductsModal from "../components/productsTakeOutModal"
import HistoricModal from "../components/historicModal"

const Dashboard = () => {
    const {populateProducts} = useContext(ProductsContext)
    const {user, populateUser} = useContext(UserContext)
    const {populateGroups, groups} = useContext(GroupsContext)

    const {showUserModal, setShowUserModal,showAddModal, setShowAddModal, showEditModal, setShowEditModal,
    showAddUserModal, setShowAddUserModal, showEditUserModal, setShowEditUserModal, showGroupModal, setShowGroupModal,
    showTakeOutPrModal, setShowTakeOutPrModal, showHistoricModal, setShowHistoricModal} = useContext(ModalsContext)

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
        <StyledApplicationMain>
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

                { showGroupModal ? (
                    <GroupsModal setShowGroupsModal={setShowGroupModal}></GroupsModal>
                ) : (
                    <></>
                )}

                { showUserModal ? (
                    <UserModal setShowUserModal={setShowUserModal}></UserModal>
                ) : (
                    <></>
                )}

                { showTakeOutPrModal ? (
                    <TakeOutProductsModal setShowTakeOutPrModal={setShowTakeOutPrModal}></TakeOutProductsModal>
                ) : (
                    <></>
                )}

                { showHistoricModal ? (
                    <HistoricModal setShowHistoricModal={setShowHistoricModal}></HistoricModal>
                ) : (
                    <></>
                )}
                

                <div className="contentContainer">
                    <SearchBar></SearchBar>
                    <ProductsList></ProductsList>
                </div>
            </div>
        </StyledApplicationMain>
    )
}

export {Dashboard}

//<SideBar></SideBar>