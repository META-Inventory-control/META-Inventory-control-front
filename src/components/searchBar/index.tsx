import {FiSearch} from "react-icons/fi"
import { StyledSearchBar } from "./styles"
import { ProductsContext } from "../../contexts/productsContext"
import { useContext, useState } from "react"

export const SearchBar = () => {
    const {products, setFilteredProducts} = useContext(ProductsContext)
    const [searchValue, setSearchValue] = useState("")

    const handleFilteredProducts = () => {
        const newFilter = products?.filter((prod) => prod.name.toLowerCase().includes(searchValue))
        setFilteredProducts(newFilter!)
    }

    const handleSearchValue = (value: string) => {
        if (value === "") {
            setFilteredProducts([])
        } else {
            setSearchValue(value.toLowerCase())
        }
    }

    return (
        <StyledSearchBar>
            <input type="text" placeholder="Buscar" onChange={(e) => handleSearchValue(e.target.value)}/>
            <FiSearch size={30} onClick={() => handleFilteredProducts()}></FiSearch>
        </StyledSearchBar>
    )
}
