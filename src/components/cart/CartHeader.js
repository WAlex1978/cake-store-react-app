import React, { Component } from 'react';
import { Row, Col } from 'shards-react';
import { connect } from 'react-redux';
import Styled from '../../styled-components/Styled';

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    }
}

// The shopping cart table header
class CartHeader extends Component {
    render() { 
        return (
            <Styled.Text size="1.47rem">
                <Row>
                    {/* Occupies 3 columns of space, counts the number of items in cart */}
                    <Col xs={6}>My Cart ( {this.props.cart.length} )</Col>

                    {/* Text aligned right */}
                    <Col xs={2} style={{textAlign: "right"}}>Price</Col>
                    <Col xs={2} style={{textAlign: "right"}}>Qty</Col>
                    <Col xs={2} style={{textAlign: "right"}}>Total</Col>
                </Row>
            </Styled.Text>
        );
    }
}
 
export default connect (mapStateToProps) (CartHeader);