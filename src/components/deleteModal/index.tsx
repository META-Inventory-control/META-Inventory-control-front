import { StyledDeleteModal } from "./styles"
import { useContext } from "react"
import { ClientContext } from "../../contexts/clientContext"

interface iSetModal {
    setShowDeleteModal: (value: boolean) => void
}

const DeleteModal = ({setShowDeleteModal}: iSetModal) => {
    const {deleteContact} = useContext(ClientContext)

    const removeFocusContactId = () => {
        localStorage.removeItem("@FOCUS_CONTACT_ID")
    }

    return (
        <StyledDeleteModal>
            <main>
                <button className="closeModal" onClick={() => {setShowDeleteModal(false), removeFocusContactId()}}>X</button>
                <div>
                    <h2>Deletar contato</h2>
                    <p>Você tem certeza que quer deletar este contato?</p>
                    <button onClick={() => {deleteContact(), setShowDeleteModal(false)}}>Deletar</button>
                </div>
            </main>
        </StyledDeleteModal>
    )
}

export default DeleteModal