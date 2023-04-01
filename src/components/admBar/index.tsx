import {AiOutlinePlus, AiOutlineUserAdd} from "react-icons/ai"
import { StyledAdmBarHeader } from "./styles"
import { ModalsContext } from "../../contexts/modalsContext"
import { useContext } from "react"

export const AdmBar = () => {
    const {setShowAddModal, setShowAddUserModal} = useContext(ModalsContext)

    return (
        <StyledAdmBarHeader>
            <div className="addProduct" onClick={() => setShowAddUserModal(true)}>
                <AiOutlinePlus size={30} color={"white"}></AiOutlinePlus>
                <span>Adicionar produto</span>
            </div>
            <button className="addUser" onClick={() => setShowAddUserModal(true)}>
                <AiOutlineUserAdd size={26} color={"white"}></AiOutlineUserAdd>
                <span>Criar usuário</span>
            </button>
        </StyledAdmBarHeader>
    )
}