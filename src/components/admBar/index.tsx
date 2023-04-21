import {AiOutlinePlus, AiOutlineUserAdd, AiOutlineGroup} from "react-icons/ai"
import { StyledAdmBarHeader } from "./styles"
import { ModalsContext } from "../../contexts/modalsContext"
import { useContext } from "react"

export const AdmBar = () => {
    const {setShowAddModal, setShowAddUserModal} = useContext(ModalsContext)

    return (
        <StyledAdmBarHeader>
            <div className="addProduct" onClick={() => setShowAddModal(true)}>
                <AiOutlinePlus size={26} color={"white"}></AiOutlinePlus>
                <span>Adicionar produto</span>
            </div>
            <div className="addUser" onClick={() => setShowAddUserModal(true)}>
                <AiOutlineUserAdd size={26} color={"white"}></AiOutlineUserAdd>
                <span>Criar usuário</span>
            </div>
            <div className="addGroup" onClick={() => console.log("Abrir modal de grupos")}>
                <AiOutlineGroup size={26} color={"white"}></AiOutlineGroup>
                <span>Criar grupo</span>
            </div>
        </StyledAdmBarHeader>
    )
}