import { BsThreeDotsVertical } from "react-icons/bs"
import { StyledProductsListUl } from "./styles"
import { ProductsContext } from "../../contexts/productsContext"
import { UserContext } from "../../contexts/userContext"
import { useContext } from "react"
import { ModalsContext } from "../../contexts/modalsContext"

export const ProductsList = () => {
    const {products, filteredProducts} = useContext(ProductsContext)
    const {user} = useContext(UserContext)
    const {setShowEditModal} = useContext(ModalsContext)

    const setFocusProductId = (productId: string) => {
        localStorage.setItem("@FOCUS_PRODUCT_ID", productId)
    }
    
    return (
        <StyledProductsListUl>
            { filteredProducts?.length ? (
                filteredProducts.map((product) => {
                    return (
                        <li className="productCard" key={product.id}>
                            <div className="imgDiv">
                                {product.image ? (
                                    <img src={product.image} alt="" />
                                ) : (
                                    <img src="https://www.ncenet.com/wp-content/uploads/2020/04/no-image-png-2.png" alt="" />
                                )}
                            </div>
                            <div className="contentDiv">
                                <div>
                                    <h2>{product.name}</h2>
                                    { user?.is_superuser ? (
                                        <BsThreeDotsVertical size={30} color={"black"} onClick={() => {setShowEditModal(true), setFocusProductId(product.id)}}></BsThreeDotsVertical>  
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
                products?.map((product) => {
                    return (
                        <li className="productCard" key={product.id}>
                            <div className="imgDiv">
                                {product.image ? (
                                    <img src={product.image} alt="" />
                                ) : (
                                    <img src="https://www.ncenet.com/wp-content/uploads/2020/04/no-image-png-2.png" alt="" />
                                )}
                            </div>
                            <div className="contentDiv">
                                <div>
                                    <h2>{product.name}</h2>
                                    { user?.is_superuser ? (
                                        <BsThreeDotsVertical size={30} color={"black"} onClick={() => {setShowEditModal(true), setFocusProductId(product.id)}}></BsThreeDotsVertical>  
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
            )}
        </StyledProductsListUl>
    )

}