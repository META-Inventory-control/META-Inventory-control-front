
import { StyledApplicationMain } from "./styles/dashboard-style"
import { useEffect, useState } from "react"
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
import { DescriptionModal } from "../components/descriptionModal"
import {BsArrowBarLeft, BsArrowBarRight} from "react-icons/bs"

const Dashboard = () => {
    const {populateProducts, products} = useContext(ProductsContext)
    const {user, populateUser} = useContext(UserContext)
    const {populateGroups, groups} = useContext(GroupsContext)
    const [showAside, setShowAside] = useState(true)

    const {showUserModal, setShowUserModal,showAddModal, setShowAddModal, showEditModal, setShowEditModal,
    showAddUserModal, setShowAddUserModal, showEditUserModal, setShowEditUserModal, showGroupModal, setShowGroupModal,
    showTakeOutPrModal, setShowTakeOutPrModal, showHistoricModal, setShowHistoricModal, showDescriptionModal, setShowDescriptionModal} = useContext(ModalsContext)

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
            {
                    showAside ? (
                        <div className="sideBarContainer">
                            <SideBar></SideBar>
                        </div>
                    ) : (
                        <></>
                    )
                }
            <div className={showAside? "mainContainer" : "fullMainContainer"}>
                {
                    showAside ? (
                        <button className="buttonShowAside" onClick={() => setShowAside(!showAside)}>
                            <BsArrowBarLeft size={34}></BsArrowBarLeft>
                        </button>
                    ) : (
                        <button className="buttonShowAside" onClick={() => setShowAside(!showAside)}>
                            <BsArrowBarRight size={34}></BsArrowBarRight>
                        </button>
                    )
                }
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
                    <EditModal showAside={showAside} setShowEditModal={setShowEditModal}></EditModal>
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
                    <TakeOutProductsModal showAside={showAside} setShowTakeOutPrModal={setShowTakeOutPrModal}></TakeOutProductsModal>
                ) : (
                    <></>
                )}

                { showHistoricModal ? (
                    <HistoricModal setShowHistoricModal={setShowHistoricModal}></HistoricModal>
                ) : (
                    <></>
                )}

                { showDescriptionModal ? (
                    <DescriptionModal showAside={showAside} setShowDescriptionModal={setShowDescriptionModal}></DescriptionModal>
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