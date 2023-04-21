import {FiSearch} from "react-icons/fi"
import { StyledSearchBar } from "./styles"
import { ProductsContext } from "../../contexts/productsContext"
import { useContext, useState } from "react"
import { GroupsContext } from "../../contexts/groupsContext"

export const SearchBar = () => {
    const {products, setFilteredProducts} = useContext(ProductsContext)
    const {groups} = useContext(GroupsContext)
    const [searchValue, setSearchValue] = useState("")

    const handleWrittenFilteredProducts = () => {
        const newFilter = products?.filter((prod) => prod.name.toLowerCase().includes(searchValue) || prod.code.toLowerCase().includes(searchValue))
        setFilteredProducts(newFilter!)
    }

    const handleWrittenSearchValue = (value: string) => {
        if (value === "") {
            setFilteredProducts([])
        } else {
            setSearchValue(value.toLowerCase())
        }
    }

    const handleGroupsFilteredProducts = (value: string) => {
        const newFilter = products?.filter((prod) => prod.group === value)
        setFilteredProducts(newFilter!)
    }

    const resetSearch = () => {
        setFilteredProducts([])
    }

    return (
        <StyledSearchBar>
            <div>
                <input type="text" placeholder="Buscar" onChange={(e) => handleWrittenSearchValue(e.target.value)}/>
                <FiSearch size={30} onClick={() => handleWrittenFilteredProducts()}></FiSearch>
            </div>
            <div>
                <ul>
                    { groups ? (
                        <>
                            <li className="showAllCard" onClick={() => resetSearch()}><h3>Mostrar todos</h3></li>
                            {groups.map((group) => 
                                <li key={group.id} onClick={() => handleGroupsFilteredProducts(group.id)}>
                                    <h3>{group.group_name}</h3>
                                </li>
                            )}
                        </>
                    ) : (
                        <li><h3>Ainda não há grupos</h3></li>
                    ) }
                </ul>
            </div>
        </StyledSearchBar>
    )
}



