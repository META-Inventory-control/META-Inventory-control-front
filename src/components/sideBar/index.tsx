import { StyledSideBarSection } from "./styles"
import {BsClockHistory} from "react-icons/bs"
import {CgProfile} from "react-icons/cg"
import {BiLogOut} from "react-icons/bi"
import {SlCalculator} from "react-icons/sl"
import { ModalsContext } from "../../contexts/modalsContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AiOutlineGroup, AiOutlinePlus, AiOutlineUserAdd } from "react-icons/ai"
import { UserContext } from "../../contexts/userContext"
import { FiUsers } from "react-icons/fi"

export const SideBar = () => {
    const {setShowEditUserModal} = useContext(ModalsContext)
    const { user } = useContext(UserContext)
    const {setShowAddModal, setShowAddUserModal, setShowGroupModal, setShowUserModal,
            setShowHistoricModal, modalActive, setShowMultipliersModal} = useContext(ModalsContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.clear()
        navigate("/login")
    }

    return(
        <>
            <StyledSideBarSection>
            <div className="logoDiv">
                <img src="./image.png" alt="" />
            </div>
            <aside className="navAside">
                { user?.is_superuser && !user.is_operator ? (
                    <>
                        <div className="addProduct option" onClick={()=> {if(!modalActive){setShowAddModal(true)}}}>
                            <AiOutlinePlus size={26} color={"white"}></AiOutlinePlus>
                            <span>Adicionar produto</span>
                        </div>
                        <div className="addUser option" onClick={()=> {if(!modalActive){setShowAddUserModal(true)}}}>
                            <AiOutlineUserAdd size={26} color={"white"}></AiOutlineUserAdd>
                            <span>Criar usuário</span>
                        </div>
                        <div onClick={()=> {if(!modalActive){setShowUserModal(true)}}} className="option">
                            <FiUsers size={30}></FiUsers>
                            <h4>Usuarios</h4>
                        </div>
                        <div className="addGroup option" onClick={()=> {if(!modalActive){setShowGroupModal(true)}}}>
                            <AiOutlineGroup size={26} color={"white"}></AiOutlineGroup>
                            <span>Gerenciar grupos</span>
                        </div>
                        <div className="historic option" onClick={()=> {if(!modalActive){setShowHistoricModal(true)}}}>
                            <BsClockHistory size={26} color={"white"}></BsClockHistory>
                            <span>Histórico de baixas</span>
                        </div>
                        <div className="editMultipliers option" onClick={()=> {if(!modalActive){setShowMultipliersModal(true)}}}>
                            <SlCalculator size={26} color={"white"}></SlCalculator>
                            <span>Multiplicadores</span>
                        </div>
                    </>
                ) : (
                    <></>
                )}

                {user?.is_operator ? (
                    <>
                        <div className="addProduct option" onClick={()=> {if(!modalActive){setShowAddModal(true)}}}>
                            <AiOutlinePlus size={26} color={"white"}></AiOutlinePlus>
                            <span>Adicionar produto</span>
                        </div>
                        <div className="addGroup option" onClick={()=> {if(!modalActive){setShowGroupModal(true)}}}>
                            <AiOutlineGroup size={26} color={"white"}></AiOutlineGroup>
                            <span>Gerenciar grupos</span>
                        </div>
                        <div className="historic option" onClick={()=> {if(!modalActive){setShowHistoricModal(true)}}}>
                            <BsClockHistory size={26} color={"white"}></BsClockHistory>
                            <span>Histórico de baixas</span>
                        </div>
                    </>
                ) : (
                    <></>
                )}

            </aside>
            <div className="optionsDiv">
                <div  className="option" onClick={() => setShowEditUserModal(true)}>
                    <CgProfile size={30}></CgProfile>
                    <h4>Perfil</h4>
                </div>
                <div  className="option" onClick={() => handleLogout()}>
                    <BiLogOut size={30}></BiLogOut>
                    <h4>Log out</h4>
                </div>
            </div>
        </StyledSideBarSection>
        </>
    )
}