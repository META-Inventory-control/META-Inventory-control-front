import { createContext } from "react";
import { useState } from "react";


interface iModalsContext {
    showEditModal: boolean,
    setShowEditModal: (value: boolean) => void,
    showDeleteModal: boolean,
    setShowDeleteModal: (value: boolean) => void,
    showAddModal: boolean,
    setShowAddModal: (value: boolean) => void
} 

export const modalsContext = createContext<iModalsContext>({} as iModalsContext)

export const ModalsProvider = ({children}:any) => {
    const [showEditModal, setShowEditModal] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [showAddModal, setShowAddModal] = useState(false)

    return (
        <modalsContext.Provider value={{
            showEditModal, setShowEditModal, showDeleteModal, setShowDeleteModal, showAddModal, setShowAddModal
        }}>
            {children}
        </modalsContext.Provider>
    )
}