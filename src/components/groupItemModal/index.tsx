import { iProduct } from "../../contexts/productsContext"
import { StyledGroupItem } from "./style"

export const GroupItemModal = ({image, name, qty, entry_cost, id}: iProduct) => {
    return(
        <StyledGroupItem key={id}>
            <img src={image} alt={name} />
            <div>
                <p>{name}</p>
                <p>Valor de custo: R${entry_cost}</p>
                <p>Quantidade: {qty}x</p>
            </div>
        </StyledGroupItem>
    )
}