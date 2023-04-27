import { createContext, useEffect } from "react";
import { useState } from "react";


interface iModalsContext {
    showEditModal: boolean,
    setShowEditModal: (value: boolean) => void,
    showAddModal: boolean,
    setShowAddModal: (value: boolean) => void,
    showAddUserModal: boolean,
    setShowAddUserModal: (value: boolean) => void,
    showEditUserModal: boolean,
    setShowEditUserModal: (value: boolean) => void
    showGroupModal: boolean
    setShowGroupModal: (value: boolean) => void
    showUserModal: boolean
    setShowUserModal: React.Dispatch<React.SetStateAction<boolean>>,
    showTakeOutPrModal: boolean,
    setShowTakeOutPrModal: (value: boolean) => void
} 

export const ModalsContext = createContext<iModalsContext>({} as iModalsContext)

export const ModalsProvider = ({children}:any) => {
    const [showEditModal, setShowEditModal] = useState(false)
    const [showAddModal, setShowAddModal] = useState(false)
    const [showAddUserModal, setShowAddUserModal] = useState(false)
    const [showEditUserModal, setShowEditUserModal] = useState(false)
    const [showGroupModal, setShowGroupModal] = useState(false)
    const [showUserModal, setShowUserModal] = useState(false)
    const [showTakeOutPrModal, setShowTakeOutPrModal] = useState(false) 

    return (
        <ModalsContext.Provider value={{
            showUserModal, setShowUserModal, showGroupModal, setShowGroupModal,showEditModal, setShowEditModal, showAddModal, setShowAddModal,
            showAddUserModal, setShowAddUserModal, showEditUserModal, setShowEditUserModal, showTakeOutPrModal, setShowTakeOutPrModal
        }}>
            {children}
        </ModalsContext.Provider>
    )
}