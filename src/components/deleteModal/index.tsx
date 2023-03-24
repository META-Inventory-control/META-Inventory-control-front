import { StyledDeleteModal } from "./styles"

interface iSetModal {
    setShowDeleteModal: (value: boolean) => void
}

const DeleteModal = ({setShowDeleteModal}: iSetModal) => {
    return (
        <StyledDeleteModal>
            <main>
                <button className="closeModal" onClick={() => setShowDeleteModal(false)}>X</button>
                <div>
                    <h2>Deletar contato</h2>
                    <p>Você tem certeza que quer deletar este contato?</p>
                    <button type="submit">Deletar</button>
                </div>
            </main>
        </StyledDeleteModal>
    )
}

export default DeleteModal