import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-contex';
import { useContext } from 'react/cjs/react.development';

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((currNumber,item) => {
        return currNumber + item.amount;
    }, 0);

    return (
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>
                You Cart
            </span>
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    )
}
export default HeaderCartButton;
