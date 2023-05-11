import { ModalsContext } from "../../contexts/modalsContext"
import { ProductsContext } from "../../contexts/productsContext";
import { StyledTakeOutProductModal } from "../productsTakeOutModal/styles"
import { useContext } from "react"

interface iDescriptionProps {
    showAside: boolean,
    setShowDescriptionModal: (value: boolean) => void;
}

const DescriptionModal = ({showAside, setShowDescriptionModal}: iDescriptionProps) => {
    const {products} = useContext(ProductsContext)
    const product = products?.find((prod) => prod.id === localStorage.getItem("@FOCUS_PRODUCT_ID"))

    return (
        <StyledTakeOutProductModal set_width={ !showAside ? "100%" : "80%"}>
            <main>
                <button className="closeModal" onClick={() => setShowDescriptionModal(false)}>X</button>
                <div>
                    <h2>Descrição:</h2>
                </div>
                <div style={{ minHeight: "100px" }}>
                    <p>{product?.description}</p>
                </div>
            </main>
        </StyledTakeOutProductModal>
    )
}

export {DescriptionModal}