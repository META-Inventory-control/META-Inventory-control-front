import { useContext, useEffect, useState } from "react"
import { StyledHistoricModal } from "./style"
import { HistoricContext } from "../../contexts/historicContext"
import { UserContext } from "../../contexts/userContext"
import { ProductsContext } from "../../contexts/productsContext"
import { GroupItemModal } from "../groupItemModal"
import {FiSearch} from "react-icons/fi"

interface iSetModal {
    setShowHistoricModal: (value: boolean) => void
}

const HistoricModal = ({setShowHistoricModal}: iSetModal) => {
    const {historicEntries, PopulateHistoricEntries, FilteredHistoricEntries, setFilteredHistoricEntries, populateFilteredHistoricEntries} = useContext(HistoricContext)
    const {userList, listAllUsers} = useContext(UserContext)
    const {products, filteredProductsHistoric, setFilteredProductsHistoric} = useContext(ProductsContext)

    const [searchValue, setSearchValue] = useState("")
    
    useEffect(() => {
        PopulateHistoricEntries()
        listAllUsers()
    }, [])

    //FILTER
    const handleWrittenFilteredProducts = () => {
        const newFilter = products?.filter((prod) => prod.name.toLowerCase().includes(searchValue) || prod.code.toLowerCase().includes(searchValue))
        setFilteredProductsHistoric(newFilter!)
    }
    const handleWrittenSearchValue = (value: string) => {
        if (value === "") {
            setFilteredProductsHistoric([])
        } else {
            setSearchValue(value.toLowerCase())
        }
    }

    //RENDER ENTRIES
    const handleEntriesRender = (id: string) => {
        populateFilteredHistoricEntries(id)
    }

    return (
        <StyledHistoricModal>
            <main>
                <button className="closeModal" onClick={() => setShowHistoricModal(false)}>X</button>
                <div>
                    <h2>HISTÓRICO DE BAIXAS</h2>
                </div>
                <div className="mainContainer">
                    <div className="filterContainer">
                        <div className="filterInformation">
                            <h3>Filtrar por produto:</h3>
                            <span>Clique em um dos produtos para exibir apenas as baixas do mesmo.</span>
                        </div>
                        <div className="filterHolder">
                            <div>
                                <input type="text" onChange={(e) => handleWrittenSearchValue(e.target.value)}/>
                                <FiSearch size={30} color="white" onClick={() => handleWrittenFilteredProducts()}></FiSearch>
                            </div>
                            <button onClick={() => setFilteredProductsHistoric([])}>Mostrar todos</button>
                        </div>
                        <div className="productsContainer">
                            <ul>
                                {filteredProductsHistoric!.length ? (
                                    filteredProductsHistoric!.map((prod) => 
                                        <li onClick={() => handleEntriesRender(prod.id)} className="productCard">
                                            <img src={prod.image} alt={prod.name} />
                                            <div>
                                                <p>{prod.name}</p>
                                                <p>Valor de custo: R${prod.entry_cost}</p>
                                                <p>Quantidade: {prod.qty}x</p>
                                            </div>
                                        </li>
                                    )
                                ) : (
                                    products?.map((prod) =>
                                        <li onClick={() => handleEntriesRender(prod.id)} className="productCard">
                                            <img src={prod.image} alt={prod.name} />
                                            <div>
                                                <p>{prod.name}</p>
                                                <p>Valor de custo: R${prod.entry_cost}</p>
                                                <p>Quantidade: {prod.qty}x</p>
                                            </div>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className="historicEntriesContainer">
                        <div className="historicEntriesInformation">
                            <h3>Baixas:</h3>
                            <p>Este é o históricos de baixas dado pelos operadores do sistema.</p>
                            <p>Quantidade de baixas totais armazenadas: <b>{historicEntries?.length}</b></p>
                            <button onClick={() => setFilteredHistoricEntries([])}>Mostrar todos</button>
                        </div>
                        <ul>
                            { FilteredHistoricEntries!.length ? (
                                    FilteredHistoricEntries!.map((entry) => {
                                        const user = userList?.find((user) => user.id === entry.createdBy)
                                        const product = products?.find((prod) => prod.id === entry.product)
                                        return (
                                            <li className="entryCard">
                                                <section>
                                                    <div>
                                                        <h3>{product?.name}</h3>
                                                        <span>{product?.code}</span>
                                                    </div>
                                                    <div>
                                                        <p>{entry.description}</p>
                                                    </div>
                                                </section>
                                                <section>
                                                    <span>Quantidade baixada: {entry.qty}x</span>
                                                    <span>Baixado em: {entry.createdAt}</span>
                                                    <span>Baixado por: {user?.username}</span>
                                                </section>
                                            </li>
                                        )
                                    })
                                ) : (
                                    historicEntries!.map((entry) => {
                                        const user = userList?.find((user) => user.id === entry.createdBy)
                                        const product = products?.find((prod) => prod.id === entry.product)
                                        return (
                                            <li className="entryCard"> 
                                                <section>
                                                    <div>
                                                        <h3>{product?.name}</h3>
                                                        <span>{product?.code}</span>
                                                    </div>
                                                    <div>
                                                        <p>{entry.description}</p>
                                                    </div>
                                                </section>
                                                <section>
                                                    <span>Quantidade baixada: {entry.qty}x</span>
                                                    <span>Baixado em: {entry.createdAt}</span>
                                                    <span>Baixado por: {user?.username}</span>
                                                </section>
                                            </li>
                                        )
                                    })
                                )}
                        </ul>
                    </div>
                </div>
            </main>
        </StyledHistoricModal>
    )
}

export default HistoricModal