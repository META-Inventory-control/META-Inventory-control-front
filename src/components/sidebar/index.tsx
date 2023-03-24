import { StyledSideBar } from "./styles"
import {AiOutlineUserAdd} from "react-icons/ai"
import { useContext } from "react"
import { ClientContext } from "../../contexts/clientContext"
import { modalsContext } from "../../contexts/modalsContext"

const SideBar = () => {
    const {client} = useContext(ClientContext)
    const {setShowAddModal} = useContext(modalsContext)

    return (
        <StyledSideBar>
            <section className="userInfo">
                <img src="./user.png" alt="" />
                <div>
                    <h3>{client?.full_name}</h3>
                    <span>{client?.email}</span>
                    <span>{client?.phone}</span>
                </div>
            </section>
            <section className="addContactSec">
                <button><AiOutlineUserAdd size={35} color="white" onClick={() => setShowAddModal(true)}></AiOutlineUserAdd></button>
            </section>
        </StyledSideBar>
    )
}

export default SideBar