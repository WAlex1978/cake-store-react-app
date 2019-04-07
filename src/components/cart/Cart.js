import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'shards-react';
import Styled from '../../styled-components/Styled';

import CartHeader from './CartHeader';
import CartItems from './CartItems';
import CartFooter from './CartFooter';

// Shopping cart page
class Cart extends Component {
    render() { 
        return (
            <Fragment>

                {/* Continue shopping button */}
                <Styled.Section padding="60px 0 0 0">
                    <Styled.Wrapper width="75%">
                        <Link to="/"><Button size="lg" theme="null">{"<"} Continue Shopping</Button></Link>
                    </Styled.Wrapper>
                </Styled.Section>

                {/* Table that displays shopping cart */}
                <Styled.Section padding="40px 0 0 0">
                    <Styled.Wrapper width="70%">
                        <Container fluid>
                            <CartHeader />
                            <CartItems />
                            <CartFooter />
                        </Container>
                    </Styled.Wrapper>
                </Styled.Section>
            </Fragment>
        );
    }
}
 
export default Cart;