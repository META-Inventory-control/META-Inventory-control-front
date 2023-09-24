import { StyledProductsListUl } from "./styles";
import { ProductsContext } from "../../contexts/productsContext";
import { useContext } from "react";
import ProductCard from "../productCard";
import ProductListCard from "../productListCard";

export const ProductsList = () => {
  const { products, filteredProducts, listMode } = useContext(ProductsContext);

  const setFocusProductId = (productId: string) => {
    localStorage.setItem("@FOCUS_PRODUCT_ID", productId);
  };

  return (
    <StyledProductsListUl listMode={listMode}>
      {filteredProducts?.length ? (
        filteredProducts.map((product) => {
          if (listMode) {
            return <ProductListCard key={product.id} {...product} />;
          } else {
            return <ProductCard key={product.id} {...product} />;
          }
        })
      ) : (
        <></>
      )}

      {filteredProducts == null ? (
        <>
          <h1 className="filteredNull">Vazio</h1>
        </>
      ) : (
        <></>
      )}

      {filteredProducts != null && filteredProducts?.length <= 0 ? (
        products?.map((product) => {
          if (listMode) {
            return <ProductListCard key={product.id} {...product} />;
          } else {
            return <ProductCard key={product.id} {...product} />;
          }
        })
      ) : (
        <></>
      )}
    </StyledProductsListUl>
  );
};
