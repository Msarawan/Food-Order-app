import * as React from 'react';
import { useContext } from 'react';
import CartIcon from '../../Cart/carticon/CartIcon';
import CartContext from '../../../store/CartContext';
import classes from './HeaderCartButton.module.css';


interface Props {
  onClick:any
}
const HeaderCartButton = (props:Props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item['amount'];
  }, 0);

  return (
    <button className={classes.button}  onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span className={classes.name}>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;