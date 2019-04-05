import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'shards-react';
import Styled from '../../styled-components/Styled';


const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

class Cart extends Component {
    render() { 
        return (
            <Fragment>
                <Styled.Section padding="40px 0 0 0">
                    <Styled.Wrapper width="75%">
                        <Styled.Text size="1.2rem">{"<-"} Continue Shopping</Styled.Text>
                    </Styled.Wrapper>
                </Styled.Section>

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
                                <Row style={{margin: "0 0 8px 0"}}>
                                    <Col xs={3} xl={2}><Styled.Image image={cart.img} width="150px" height="130px" /></Col>
                                    <Col xs={3} xl={4}>
                                        <Styled.Div display="flex" direction="column">
                                            <Styled.Text size="1.5rem">{cart.title}</Styled.Text>
                                            <Styled.Text size="1rem" margin="10px 0 0 0">Remove</Styled.Text>
                                        </Styled.Div>
                                    </Col>
                                    <Col xs={2}><Styled.Text size="1.25rem" align="right">${cart.price.toFixed(2)}</Styled.Text></Col>
                                    <Col xs={2}><Styled.Text size="1.25rem" align="right">{cart.quantity}</Styled.Text></Col>
                                    <Col xs={2}><Styled.Text size="1.25rem" align="right">${(cart.price*cart.quantity).toFixed(2)}</Styled.Text></Col>
                                </Row>
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