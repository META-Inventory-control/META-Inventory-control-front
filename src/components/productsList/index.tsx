import { BsThreeDotsVertical } from "react-icons/bs"
import {TbRotateRectangle} from "react-icons/tb"
import { StyledProductsListUl } from "./styles"
import { ProductsContext } from "../../contexts/productsContext"
import { UserContext } from "../../contexts/userContext"
import { useContext } from "react"
import { ModalsContext } from "../../contexts/modalsContext"
import { GroupsContext } from "../../contexts/groupsContext"

export const ProductsList = () => {
    const {products, filteredProducts} = useContext(ProductsContext)
    const {user} = useContext(UserContext)
    const {setShowEditModal, setShowTakeOutPrModal} = useContext(ModalsContext)
    const {groups} = useContext(GroupsContext)

    const setFocusProductId = (productId: string) => {
        localStorage.setItem("@FOCUS_PRODUCT_ID", productId)
    }

    console.log(filteredProducts)

    return (
        <StyledProductsListUl>
            { filteredProducts?.length ? (
                filteredProducts.map((product) => {
                    return (
                        <li className="productCard" key={product.id}>
                            <div className="groupDiv">
                                <span>{groups.find((group) => group.id === product.group)?.group_name}</span>
                            </div>
                            <div className="codeDiv">
                                <span>MT{product.code}</span>
                            </div>
                            <div className="imgDiv">
                                {product.image ? (
                                    <img src={product.image} alt="" />
                                ) : (
                                    <img src="https://www.ncenet.com/wp-content/uploads/2020/04/no-image-png-2.png" alt="" />
                                )}
                            </div>
                            <div className="contentDiv">
                                <div>
                                    <button>Ola</button>
                                    <h2>{product.name}</h2>
                                    { user?.is_superuser ? (
                                        <BsThreeDotsVertical size={30} color={"black"} onClick={() => {setShowEditModal(true), setFocusProductId(product.id)}}></BsThreeDotsVertical>  
                                    ) : (
                                        <></>
                                    )}
                                    { user?.is_superuser ? (
                                        <TbRotateRectangle size={30} color={"black"} onClick={() => {setShowTakeOutPrModal(true), setFocusProductId(product.id)}}></TbRotateRectangle>  
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
            )}

            {
                filteredProducts == null ? (
                    <>
                        <h1 className="filteredNull">Vazio</h1>
                    </>
                ) : (
                    <></>
                )
            }

            {
                filteredProducts != null && filteredProducts?.length <= 0 ? (
                  products?.map((product) => {
                      return (
                          <li className="productCard" key={product.id}>
                              <div className="groupDiv">
                                  <span>{groups.find((group) => group.id === product.group)?.group_name}</span>
                              </div>
                              <div className="codeDiv">
                                  <span>MT{product.code}</span>
                              </div>
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
                                      <div className="interactionContainer">
                                          { user?.is_superuser ? (
                                              <BsThreeDotsVertical size={30} color={"black"} onClick={() => {setShowEditModal(true), setFocusProductId(product.id)}}></BsThreeDotsVertical>  
                                          ) : (
                                              <></>
                                          )}
                                          { user?.is_superuser ? (
                                              <TbRotateRectangle size={30} color={"black"} onClick={() => {setShowTakeOutPrModal(true), setFocusProductId(product.id)}}></TbRotateRectangle>  
                                          ) : (
                                              <></>
                                          )}
                                      </div>
                                  </div>
                                  <div className="codeDiv">
                                      <span>{product.code}</span>
                                  </div>
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
                      <></>
                  )
            }
        </StyledProductsListUl>
    )

}