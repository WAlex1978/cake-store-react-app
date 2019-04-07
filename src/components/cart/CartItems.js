import React, { Component, Fragment } from 'react';
import { removeFromCart } from '../actions/StoreActions';
import { connect } from 'react-redux';
import { Row, Col } from 'shards-react';
import Styled from '../../styled-components/Styled';

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        total: state.total,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        removeFromCart: (item) => {dispatch(removeFromCart(item))}
    }
}

// Style attributes for price and quantity
const attribute = {
    fontSize: "1.25em",
    textAlign: "right",
    color: "black"
};

// Shopping cart table items
class CartItems extends Component {

    // Calls to remove from cart, provides selected item as parameter
    removeFromCart = (item) => {
        this.props.removeFromCart(item);
    }

    render() { 
        return (
            <Fragment>
                <Styled.HR width="100%"/>

                {/* For each item in the cart */}
                {this.props.cart.map((cart, i) => (
                    <Row key={cart.id} style={{marginTop: "8px"}}>

                        {/* Item image, size adjusts for responsive layout */}
                        <Col xs={3} xl={2}><Styled.Image image={cart.img} width="150px" height="130px" /></Col>

                        {/* Item title and remove from cart button, occupies 2 columns of space */}
                        <Col xs={3} xl={4}>
                            <Styled.Div display="flex" direction="column">
                                <Styled.Text size="1.5rem">{cart.title}</Styled.Text>

                                {/* Calls removeFromCart on click */}
                                <Styled.Text size="1rem" onClick={() => this.removeFromCart(cart)} 
                                style={{cursor: "pointer", width: "1px"}}>Remove</Styled.Text>
                            </Styled.Div>
                        </Col>

                        {/* Item price, fixed to 2 decimal places */}
                        <Col xs={2}><div style={attribute}>${cart.price.toFixed(2)}</div></Col>

                        {/* Item quantity */}
                        <Col xs={2}><div style={attribute}>{cart.quantity}</div></Col>

                        {/* Total price of the item, base price * quantity */}
                        <Col xs={2}><div style={attribute}>${(cart.price*cart.quantity).toFixed(2)}</div></Col>
                    </Row>
                ))}

                {/* Display if shopping cart is empty */}
                {this.props.cart.length === 0 ? (
                    <Styled.Div width="100%" height="200px" display="flex" align="center" justify="center">
                        <Styled.Text size="1.25rem">Cart is empty</Styled.Text>
                    </Styled.Div>
                ): null}

                <Styled.HR width="100%"/>
            </Fragment>
        );
    }
}
 
export default connect (mapStateToProps, mapDispatchToProps) (CartItems);