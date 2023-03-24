import { StyledEditModal } from "./styles"

interface iSetModal {
    setShowEditModal: (value: boolean) => void
}

const EditModal = ({setShowEditModal}: iSetModal) => {
    return (
        <StyledEditModal>
            <main>
                <button className="closeModal" onClick={() => setShowEditModal(false)}>X</button>
                <div>
                    <h2>Editar contato</h2>
                    <p>Para não alteração, deixe o campo em branco.</p>
                </div>
                <form action="">
                    <label>Nome completo:</label>
                    <input type="text"/>
                    <label>E-mail:</label>
                    <input type="text"/>
                    <label>Telefone:</label>
                    <input type="text"/>
                    <button type="submit">Salvar</button>
                </form>
            </main>
        </StyledEditModal>
    )
}

export default EditModal