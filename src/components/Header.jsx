import { useContext } from 'react';
import logoImg from '../assets/logo.jpg'
import Button from './UI/Button';
import CartContext from '../store/CardContext';
import UserProgressContext from '../store/UserProgressContext';

export default function Header() {

    const cartCtx = useContext(CartContext);
    const userProgerssCtx = useContext(UserProgressContext);

    const totalCartItems = cartCtx.items.reduce((totalNumerOfItems, item) => {
        return totalNumerOfItems + item.quantitiy;
    }, 0)

    function handleShowChart() {
        userProgerssCtx.
        userProgerssCtx.showCart();
    }

    return (<header id="main-header">
        <div id="title">
            <img src={logoImg} alt='A restaurant' />
            <h1>
                React Food
            </h1>
        </div>
        <nav>
            <Button textOnly onClick={handleShowChart}>Cart ({totalCartItems})</Button>
        </nav>
    </header>);
}