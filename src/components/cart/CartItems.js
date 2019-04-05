import React, { Component } from 'react';
import { removeFromCart } from '../actions/StoreActions';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'shards-react';
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

class CartItems extends Component {
    removeFromCart = (item) => {
        this.props.removeFromCart(item);
    }

    render() { 
        return (
            <Styled.Section padding="40px 0 0 0">
                <Styled.Wrapper width="70%">
                    <Container fluid>
                        <Row>
                            <Col xs={6}><Styled.Text size="1.47rem">My Cart ( {this.props.cart.length} )</Styled.Text></Col>
                            <Col xs={2}><Styled.Text size="1.47rem" align="right">Price</Styled.Text></Col>
                            <Col xs={2}><Styled.Text size="1.47rem" align="right">Qty</Styled.Text></Col>
                            <Col xs={2}><Styled.Text size="1.47rem" align="right">Total</Styled.Text></Col>
                        </Row>
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
                                <Col xs={2}><Styled.Text size="1.25rem" align="right">${cart.price.toFixed(2)}</Styled.Text></Col>
                                <Col xs={2}><Styled.Text size="1.25rem" align="right">{cart.quantity}</Styled.Text></Col>
                                <Col xs={2}><Styled.Text size="1.25rem" align="right">${(cart.price*cart.quantity).toFixed(2)}</Styled.Text></Col>
                            </Row>
                        ))}

                        {this.props.cart.length == 0 ? (
                            <Styled.Div width="100%" height="130px" display="flex" align="center" justify="center">
                                <Styled.Text size="1.25rem">Cart is empty</Styled.Text>
                            </Styled.Div>
                        ): null}

                        <Styled.HR width="100%"/>
                        <Row>
                            <Col xs={8} />
                            <Col xs={2}><Styled.Text size="1.4rem" align="right">Total:</Styled.Text></Col>
                            <Col xs={2}><Styled.Text size="1.4rem" align="right">${this.props.total.toFixed(2)}</Styled.Text></Col>
                        </Row>
                    </Container>
                </Styled.Wrapper>
            </Styled.Section>
        );
    }
}
 
export default connect (mapStateToProps, mapDispatchToProps) (CartItems);