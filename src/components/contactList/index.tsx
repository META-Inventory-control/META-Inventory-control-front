import { ContactListDiv } from "./styles"
import { useContext, useState } from "react"
import { ClientContext } from "../../contexts/clientContext"
import {AiOutlineEdit} from "react-icons/ai"
import {MdDeleteOutline} from "react-icons/md"
import EditModal from "../editModal"
import DeleteModal from "../deleteModal"
import AddContactModal from "../addModal"
import { modalsContext } from "../../contexts/modalsContext"

const ContactList = () => {
    const {showEditModal, setShowEditModal, showDeleteModal,
            setShowDeleteModal, showAddModal, setShowAddModal} = useContext(modalsContext)
    const {contacts} = useContext(ClientContext)

    console.log(showEditModal)

    return (
        <ContactListDiv>

            {showEditModal ? (
                <EditModal setShowEditModal={setShowEditModal}></EditModal>
            ) : (
                <></>
            )}

            {showDeleteModal ? (
                <DeleteModal setShowDeleteModal={setShowDeleteModal}></DeleteModal>
            ) : (
                <></>
            )}

            {showAddModal ? (
                <AddContactModal setShowAddModal={setShowAddModal}></AddContactModal>
            ) : (
                <></>
            )}

            <img src="./contact-book.png" alt="" className="contactsIcon"/>
            <ul>
                {contacts?.length ? (
                    contacts.map((contact) => {
                        return (
                            <li key={contact.id} className="card">
                                <div className="cardImg">
                                    <img src="./user-colored-center.png" alt="" />
                                </div>
                                <div className="cardInfo">
                                    <label>Nome:</label>
                                    <h2>{contact.full_name}</h2>
                                    <label>E-mail:</label>
                                    <span>{contact.email}</span>
                                    <label>Telefone:</label>
                                    <span>{contact.phone}</span>
                                </div>
                                <div className="cardOps">
                                    <AiOutlineEdit size={32} color="#1AD300" onClick={() => setShowEditModal(true)}></AiOutlineEdit>
                                    <MdDeleteOutline size={32} color="#1AD300" onClick={() => setShowDeleteModal(true)}></MdDeleteOutline>
                                </div>
                            </li>
                        )
                    })
                ) : (
                    <li className="noContentMessage">Ainda não há contatos cadastrados</li>
                )}
            </ul>
        </ContactListDiv>
    )
}

export default ContactList