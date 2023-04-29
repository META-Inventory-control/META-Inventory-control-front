import { StyledSideBarSection } from "./styles"
import {BsClockHistory} from "react-icons/bs"
import {CgProfile} from "react-icons/cg"
import {BiLogOut} from "react-icons/bi"
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
            setShowHistoricModal} = useContext(ModalsContext)
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
                { user?.is_superuser ? (
                    
                    <>
                        <div onClick={()=> setShowUserModal(true)} className="option">
                            <FiUsers size={30}></FiUsers>
                            <h4>Usuarios</h4>
                        </div>
                        
                        <div className="addProduct option" onClick={() => setShowAddModal(true)}>
                            <AiOutlinePlus size={26} color={"white"}></AiOutlinePlus>
                            <span>Adicionar produto</span>
                        </div>
                        <div className="addUser option" onClick={() => setShowAddUserModal(true)}>
                            <AiOutlineUserAdd size={26} color={"white"}></AiOutlineUserAdd>
                            <span>Criar usuário</span>
                        </div>
                        <div className="addGroup option" onClick={() => setShowGroupModal(true)}>
                            <AiOutlineGroup size={26} color={"white"}></AiOutlineGroup>
                            <span>Gerenciar grupo</span>
                        </div>
                        <div className="historic option" onClick={() => setShowHistoricModal(true)}>
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