import { BsThreeDotsVertical } from "react-icons/bs"
import { StyledProductsListUl } from "./styles"
import { ProductsContext } from "../../contexts/productsContext"
import { UserContext } from "../../contexts/userContext"
import { useContext } from "react"

export const ProductsList = () => {
    const {products} = useContext(ProductsContext)
    const {user} = useContext(UserContext)
 
    return (
        <StyledProductsListUl>
            { products ? (
                products.map((product) => {
                    return (
                        <li className="productCard" key={product.id}>
                            <div className="imgDiv">
                                <img src={product.image} alt="" />
                            </div>
                            <div className="contentDiv">
                                <div>
                                    <h2>{product.name}</h2>
                                    { user?.is_superuser ? (
                                        <BsThreeDotsVertical size={30} color={"black"}></BsThreeDotsVertical>  
                                    ) : (
                                        <></>
                                    )}
                                </div>
                                <div>
                                    { user?.is_superuser ? (
                                        <>
                                            <span>Valor de custo:</span>
                                            <span>R${product.entry_cost}</span>
                                        </>
                                    ) : (
                                        <></>
                                    )}
                                </div>
                                <div>
                                    <span>Quantidade:</span>
                                    <span>{product.qty}x</span>
                                </div>
                                <div>
                                    <span>Valor final:</span>
                                    <span>R${product.final_cost}</span>
                                </div>
                            </div>
                        </li>
                    )
                })
            ) : (
                <></>
            ) }
        </StyledProductsListUl>
    )
}