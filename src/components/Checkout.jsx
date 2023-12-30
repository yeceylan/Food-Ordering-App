import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CardContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import useHttp from "../hooks/useHttp";

const requestConfig = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
};

export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext)

    const { data, isLoading: isSending, error, sendRequest } = useHttp('http://localhost:3000/orders', requestConfig);

    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantitiy * item.price,
        0
    );
    function handleClose() {
        userProgressCtx.hideChecout();
    }
    function handleSubmit(event) {
        event.preventDefault();

        const fd = new FormData(event.target);
        const customerData = Object.fromEntries(fd.entries());

        sendRequest(JSON.stringify({
            order: {
                items: cartCtx.items,
                customer: customerData
            }
        }));


    }

    let actions = (<>
        <Button onClick={handleClose} type="button" textOnly>Close</Button>
        <Button >Submit Order</Button>
    </>);

    if(isSending){
        actions = <span>Sending order data...</span>
    }
    return (
        <Modal open={userProgressCtx.progress === 'checkout'} onCLose={handleClose}>
            <form onSubmit={handleSubmit}>
                <h2>Checkout</h2>
                <p>total amount:{currencyFormatter.format(cartTotal)}</p>
                <Input label="Full name" type="text" id="name"></Input>
                <Input label="E-mail Adress" type="email" id="email"></Input>
                <Input label="Street" type="text" id="street"></Input>
                <div className="control-row">
                    <Input label="Postal Code" type="text" id="postal-code"></Input>
                    <Input label="City" type="text" id="city"></Input>
                </div>
                <p className="modal-actions">
                    {actions}
                </p>
            </form>
        </Modal>
    );
}
