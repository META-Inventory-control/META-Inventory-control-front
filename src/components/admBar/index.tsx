import {AiOutlinePlus, AiOutlineUserAdd} from "react-icons/ai"
import { StyledAdmBarHeader } from "./styles"

export const AdmBar = () => {
    return (
        <StyledAdmBarHeader>
            <div className="addProduct">
                <AiOutlinePlus size={30} color={"white"}></AiOutlinePlus>
                <span>Adicionar produto</span>
            </div>
            <button className="addUser">
                <AiOutlineUserAdd size={26} color={"white"}></AiOutlineUserAdd>
                <span>Criar usuário</span>
            </button>
        </StyledAdmBarHeader>
    )
}