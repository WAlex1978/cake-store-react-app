import React, { Component } from 'react';
import { Row, Col } from 'shards-react';
import { connect } from 'react-redux';
import Styled from '../../styled-components/Styled';

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    }
}

class CartHeader extends Component {
    render() { 
        return (
            <Styled.Text size="1.47rem">
                <Row>
                    <Col xs={6}>My Cart ( {this.props.cart.length} )</Col>
                    <Col xs={2} style={{textAlign: "right"}}>Price</Col>
                    <Col xs={2} style={{textAlign: "right"}}>Qty</Col>
                    <Col xs={2} style={{textAlign: "right"}}>Total</Col>
                </Row>
            </Styled.Text>
        );
    }
}
 
export default connect (mapStateToProps) (CartHeader);