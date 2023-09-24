import React from "react";
import { useContext } from "react";
import { GroupsContext } from "../../contexts/groupsContext";
import { UserContext } from "../../contexts/userContext";
import { iProduct } from "../../contexts/productsContext";
import { ModalsContext } from "../../contexts/modalsContext";
import { BsThreeDotsVertical, BsTextParagraph } from "react-icons/bs";
import { TbRotateRectangle } from "react-icons/tb";
import { StyledProductCard } from "./styles";

const ProductCard = (product: iProduct) => {
  const { groups } = useContext(GroupsContext);
  const { user } = useContext(UserContext);
  const { setShowEditModal, setShowTakeOutPrModal, setShowDescriptionModal } =
    useContext(ModalsContext);

  const setFocusProductId = (productId: string) => {
    localStorage.setItem("@FOCUS_PRODUCT_ID", productId);
  };

  return (
    <StyledProductCard className="productCard">
      <div className="groupDiv">
        <span>
          {groups.find((group) => group.id === product.group)?.group_name}
        </span>
      </div>
      <div className="codeDiv">
        <span>MT{product.code}</span>
      </div>
      <div className="imgDiv">
        {product.image ? (
          <img
            onClick={() => (window.location.href = product.image)}
            src={product.image}
            alt=""
          />
        ) : (
          <img
            src="https://www.ncenet.com/wp-content/uploads/2020/04/no-image-png-2.png"
            alt=""
          />
        )}
      </div>
      <div className="contentDiv">
        <div>
          <h2>{product.name}</h2>
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
        <div>
          {user?.is_superuser && !user?.is_operator ? (
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
          {product.qty <= product.min_qty ? (
            <span className="redQty">{product.qty}x</span>
          ) : (
            <span>{product.qty}x</span>
          )}
        </div>
        <div>
          <span>Valor final:</span>
          <span>R${product.final_cost}</span>
        </div>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
