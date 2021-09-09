import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-bag.svg";
import "./cart-icon.component.scss";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
const mapStateToProps = (state) => {
  return {
    itemCount: selectCartItemsCount(state),
  };
  // return {
  //   itemCount: cartItems.reduce(
  //     (accumalatedQuantity, cartItem) =>
  //       accumalatedQuantity + cartItem.quantity,
  //     0
  //   ),
  // };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
