import { currencyFormatter } from "../util/formatting"

export default function CartItem({name,quantitiy,price,onIncrease,onDecrease}){
    return(
        <li className="cart-item">
            <p>
                {name} - {quantitiy} x {currencyFormatter.format(price)}
            </p>
            <p className="cart-item-actions">
                <button onClick={onDecrease}>-</button>
                <span>{quantitiy}</span>
                <button onClick={onIncrease}>+</button>
            </p>
        </li>
    )
}