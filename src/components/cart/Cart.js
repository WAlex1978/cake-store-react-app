import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'shards-react';
import Styled from '../../styled-components/Styled';


const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

// {this.props.cart.map((cart, i) => (
//     ))}

class Cart extends Component {
    render() { 
        return (
            <Fragment>
                <Styled.Section padding="40px 0 0 0">
                    <Styled.Wrapper width="75%">
                        <Styled.Text size="1.1rem">{"<-"} Continue Shopping</Styled.Text>
                    </Styled.Wrapper>
                </Styled.Section>

                <Styled.Section padding="60px 0 0 0">
                    <Styled.Wrapper width="70%">
                        <Container fluid>
                            <Styled.Text size="1.47rem">
                                <Row>
                                    <Col xs={6}>My Cart ( {this.props.cart.length} )</Col>
                                    <Col xs={2}>Price</Col>
                                    <Col xs={2}>Qty</Col>
                                    <Col xs={2}>Total</Col>
                                </Row>
                            </Styled.Text>
                            <Styled.HR width="100%"/>

                            {this.props.cart.map((cart, i) => (
                                <Styled.Text size="1.4rem">
                                <Row style={{margin: "0 0 8px 0"}}>
                                    <Col xs={3} xl={2}><Styled.Image image={cart.img} width="150px" height="130px" /></Col>
                                    <Col xs={3} xl={4}>
                                        <Styled.Div display="flex" direction="column">
                                            {cart.title}
                                            <Styled.Text size="1rem" margin="10px 0 0 0">Remove</Styled.Text>
                                        </Styled.Div>
                                    </Col>
                                    <Col xs={2}>$500</Col>
                                    <Col xs={2}>{cart.quantity}</Col>
                                    <Col xs={2}>$500</Col>
                                </Row>
                                </Styled.Text>
                            ))}
                            <Styled.HR width="100%"/>
                        </Container>

                            

                    </Styled.Wrapper>
                </Styled.Section>
            </Fragment>
        );
    }
}
 
export default connect (mapStateToProps) (Cart);