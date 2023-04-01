import { createContext, useEffect } from "react";
import { useState } from "react";


interface iModalsContext {
    showEditModal: boolean,
    setShowEditModal: (value: boolean) => void,
    showAddModal: boolean,
    setShowAddModal: (value: boolean) => void,
    showAddUserModal: boolean,
    setShowAddUserModal: (value: boolean) => void
} 

export const ModalsContext = createContext<iModalsContext>({} as iModalsContext)

export const ModalsProvider = ({children}:any) => {
    const [showEditModal, setShowEditModal] = useState(false)
    const [showAddModal, setShowAddModal] = useState(false)
    const [showAddUserModal, setShowAddUserModal] = useState(false)

    return (
        <ModalsContext.Provider value={{
            showEditModal, setShowEditModal, showAddModal, setShowAddModal, showAddUserModal, setShowAddUserModal
        }}>
            {children}
        </ModalsContext.Provider>
    )
}