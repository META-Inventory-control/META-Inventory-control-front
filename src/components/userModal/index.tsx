import { useContext, useEffect } from "react"
import { UserContext } from "../../contexts/userContext"
import { StyledUserModal } from "./style"
import { RiDeleteBinLine } from "react-icons/ri"

interface iSetUserModal{
    setShowUserModal: (value:boolean) => void
}

export const UserModal = ({setShowUserModal}:iSetUserModal) => {
    const {listAllUsers, userList, user} = useContext(UserContext)
    const filterUser = userList?.filter((userElement => userElement.id != user?.id))
    const { deleteUser } = useContext(UserContext)

    useEffect(()=>{
        listAllUsers()
    },[])

    const deleteFunction = (userId:string) => {
        deleteUser(userId)
    }

    return(
        <StyledUserModal>
            <div className="divContainer">
            <button onClick={() => setShowUserModal(false)} className="closeModal">X</button>
            <h1>Usuarios - Qtd. {filterUser?.length}</h1>
                <ul>
                {
                    filterUser ? (
                        filterUser.map((user) => <li key={user.id}>
                            <div>
                                <h4>{user.username}</h4>
                                <p>{user.email}</p>
                            </div>
                            <button onClick={()=> deleteFunction(user.id)} className="buttonDelete"><RiDeleteBinLine color="125EA6" size={30}></RiDeleteBinLine></button>
                        </li>)
                    ) : (
                        <></>
                    )
                }
                </ul>
            </div>
        </StyledUserModal>
    )
}