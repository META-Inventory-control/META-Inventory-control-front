import React from "react";
import { useContext } from "react";
import { GroupsContext } from "../../contexts/groupsContext";
import { UserContext } from "../../contexts/userContext";
import { iProduct } from "../../contexts/productsContext";
import { ModalsContext } from "../../contexts/modalsContext";
import { BsThreeDotsVertical, BsTextParagraph, BsImage } from "react-icons/bs";
import { TbRotateRectangle } from "react-icons/tb";
import { StyledProductListCard } from "./styles";

const ProductListCard = (product: iProduct) => {
  const { groups } = useContext(GroupsContext);
  const { user } = useContext(UserContext);
  const { setShowEditModal, setShowTakeOutPrModal, setShowDescriptionModal } =
    useContext(ModalsContext);

  const setFocusProductId = (productId: string) => {
    localStorage.setItem("@FOCUS_PRODUCT_ID", productId);
  };

  const seeImage = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <StyledProductListCard className="productCard">
        <div className="iconDiv">
          <BsImage
            size={30}
            color={"black"}
            onClick={() => seeImage(product.image)}
          ></BsImage>
        </div>
        <div className="nameDiv">
          <h2>{product.name}</h2>
        </div>
        <div className="entryCostValue">
          {user?.is_superuser && !user?.is_operator ? (
            <>
              <span>Valor de custo: </span>
              <span>R${product.entry_cost}</span>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="qtyDiv">
          <span>Qtd: </span>
          {product.qty <= product.min_qty ? (
            <span className="redQty">{product.qty}x</span>
          ) : (
            <span>{product.qty}x</span>
          )}
        </div>
        <div className="finalCostDiv">
          <span>Valor final: </span>
          <span>R${product.final_cost}</span>
        </div>
        <div className="actionsDiv">
          {user?.is_superuser ? (
            <BsThreeDotsVertical
              size={30}
              color={"black"}
              onClick={() => {
                setShowEditModal(true), setFocusProductId(product.id);
              }}
            ></BsThreeDotsVertical>
          ) : (
            <></>
          )}
          {user?.is_superuser ? (
            <TbRotateRectangle
              size={30}
              color={"black"}
              onClick={() => {
                setShowTakeOutPrModal(true), setFocusProductId(product.id);
              }}
            ></TbRotateRectangle>
          ) : (
            <BsTextParagraph
              color="black"
              size={30}
              onClick={() => {
                setShowDescriptionModal(true), setFocusProductId(product.id);
              }}
            ></BsTextParagraph>
          )}
        </div>
      </StyledProductListCard>
    </>
  );
};

export default ProductListCard;
