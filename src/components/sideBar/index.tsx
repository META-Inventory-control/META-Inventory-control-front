import { StyledSideBarSection } from "./styles"
import {BsBoxSeam} from "react-icons/bs"
import {CgProfile} from "react-icons/cg"
import {BiLogOut} from "react-icons/bi"

export const SideBar = () => {
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
                <div  className="option">
                    <CgProfile size={30}></CgProfile>
                    <h4>Perfil</h4>
                </div>
                <div  className="option">
                    <BiLogOut size={30}></BiLogOut>
                    <h4>Log out</h4>
                </div>
            </div>
        </StyledSideBarSection>
    )
}