import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button } from 'shards-react';
import Styled from '../../styled-components/Styled';
import CartItems from './CartItems';

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        total: state.total,
    }
}

class Cart extends Component {
    render() { 
        return (
            <Fragment>
                <Styled.Section padding="40px 0 0 0">
                    <Styled.Wrapper width="75%">
                        <Link to="/"><Button size="lg" theme="null">{"<"} Continue Shopping</Button></Link>
                    </Styled.Wrapper>
                </Styled.Section>
                <CartItems />
                
            </Fragment>
        );
    }
}
 
export default connect (mapStateToProps) (Cart);