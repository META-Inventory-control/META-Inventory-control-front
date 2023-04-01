import { StyledSideBarSection } from "./styles"
import {BsBoxSeam} from "react-icons/bs"
import {CgProfile} from "react-icons/cg"
import {BiLogOut} from "react-icons/bi"
import { ModalsContext } from "../../contexts/modalsContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

export const SideBar = () => {
    const {setShowEditUserModal} = useContext(ModalsContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.clear()
        navigate("/login")
    }

    return(
        <StyledSideBarSection>
            <div className="logoDiv">
                <img src="./image.png" alt="" />
            </div>
            <aside className="navAside">
                <div className="option">
                    <BsBoxSeam size={30}></BsBoxSeam>
                    <h4>Produtos</h4>
                </div>
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
    )
}