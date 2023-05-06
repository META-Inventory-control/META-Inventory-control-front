import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { GroupsContext } from "../../contexts/groupsContext"
import { iProduct, ProductsContext } from "../../contexts/productsContext"
import { GroupItemModal } from "../groupItemModal"
import { StyledCreateGroupModal } from "./style"
import { toast } from "react-toastify"

interface iGroupsPros{
    setShowGroupsModal: (value: boolean) => void
}

export const GroupsModal = ({setShowGroupsModal}: iGroupsPros) =>{

    const { groups } = useContext(GroupsContext)
    const { products } = useContext(ProductsContext)
    const { createGroups, deleteGroups, patchGroups, populateGroups } = useContext(GroupsContext)
    const [ currentGroup, setCurrentGroup ] = useState<iProduct[]>([])
    const [ currentGroupName, setCurrentGroupName ] = useState("")
    const [ currentId , setCurrentId ] = useState("")
    const [ activateForm, setActivateForm ] = useState(false)

    const createGroupSchema = yup.object().shape({
        group_name: yup.string().required("Nome obrigatório"),
    })

    const { register, handleSubmit, formState: { errors }} = useForm({resolver: yupResolver(createGroupSchema)})

    const groupsView = (groupId:string , groupName:string) =>{
        const arrayFilter = products?.filter((product) => product.group == groupId)
        if(arrayFilter){
            setCurrentGroup(arrayFilter)
            setCurrentGroupName(groupName)
            setCurrentId(groupId)
        }
    }

    const deleteGroupFunc = (itemId:any) => {
        if(currentGroup.length <= 0){
            deleteGroups(itemId)
            setCurrentGroup([])
            setCurrentGroupName("")
            setCurrentId("")
            setActivateForm(false)
            console.log(currentGroup)
        } else {
            toast.warn("Grupo precisa estar vazio para ser deletado", {autoClose:2500})
        }
    }

    const patchGroupFunc = (formData:any) => {
        patchGroups(formData, currentId)
        setActivateForm(false)
        setCurrentGroupName(formData.group_name)
    }

    const createGroupForm = (formData: any) => {
        createGroups(formData)
    }

    return(
        <StyledCreateGroupModal>
            <main>
                <button className="closeModal" onClick={() => setShowGroupsModal(false)}>X</button>
                <h2>
                    GRUPOS
                </h2>
                <div className="divContainer">
                    <div className="divDisplay">
                        <form onSubmit={handleSubmit(createGroupForm)} className="createGroup">
                            <h3>Novo Grupo</h3>
                            <input placeholder="Nome do grupo..." type="text" {...register("group_name")} />
                            <button type="submit">Criar grupo</button>
                        </form>
                        <div className="existGroup">
                        <h3>Selecione um grupo: </h3>
                            <ul className="ulGroups">
                                {
                                    groups ? (
                                        groups.map((group) => <li className="liGroups" key={group.id} onClick={() => groupsView(group.id, group.group_name)}><p>{group.group_name}</p></li>)
                                    ) : (
                                        <></>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    {
                        currentGroup ? (
                            <>
                                <div className="divList">
                                    <div className="divButtons">
                                        <h3>{currentGroupName}</h3>
                                        <button className="buttonPatch" onClick={()=> setActivateForm(!activateForm)}>Editar</button>
                                        <button className="buttonDelete" onClick={()=> deleteGroupFunc(currentId)}>Excluir</button>
                                    </div>
                                    {
                                        activateForm ? (
                                            <>
                                            <form className="formPatch" onSubmit={handleSubmit(patchGroupFunc)}>
                                                <input type="text" placeholder="Novo nome do grupo..." {...register("group_name")}/>
                                                <button type="submit">Confirmar</button>
                                            </form>
                                            </>
                                        ) : (
                                            <></>
                                        )
                                    }
                                    <ul className="existGroupUl">
                                        {
                                            currentGroup.length ? (
                                                currentGroup.map((group) => <> 
                                                <GroupItemModal key={group.id} image={group.image} name={group.name} qty={group.qty} entry_cost={group.entry_cost} id={group.id} final_cost={0} group={""} code={""}></GroupItemModal>
                                                </>)
                                            ) : (
                                                <h2 className="ulEmpty">Vazio</h2>
                                            )
                                        }
                                    </ul>
                                </div>
                            </>
                        ) : (
                            <></>
                        )
                    }
                </div>
            </main>
        </StyledCreateGroupModal>
    )
}