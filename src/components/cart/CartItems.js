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

const attribute = {
    fontSize: "1.25em",
    textAlign: "right",
    color: "black"
};

class CartItems extends Component {
    removeFromCart = (item) => {
        this.props.removeFromCart(item);
    }

    render() { 
        return (
            <Fragment>
                <Styled.HR width="100%"/>
                {this.props.cart.map((cart, i) => (
                    <Row key={cart.id} style={{marginTop: "8px"}}>

                        <Col xs={3} xl={2}><Styled.Image image={cart.img} width="150px" height="130px" /></Col>
                        <Col xs={3} xl={4}>
                            <Styled.Div display="flex" direction="column">
                                <Styled.Text size="1.5rem">{cart.title}</Styled.Text>
                                <Styled.Text size="1rem" onClick={() => this.removeFromCart(cart)} 
                                style={{cursor: "pointer", width: "1px"}}>Remove</Styled.Text>
                            </Styled.Div>
                        </Col>

                        <Col xs={2}><div style={attribute}>${cart.price.toFixed(2)}</div></Col>
                        <Col xs={2}><div style={attribute}>{cart.quantity}</div></Col>
                        <Col xs={2}><div style={attribute}>${(cart.price*cart.quantity).toFixed(2)}</div></Col>
                    </Row>
                ))}

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