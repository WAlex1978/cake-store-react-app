import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { NavLink, Button } from 'shards-react';
import { connect } from 'react-redux';
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
                        <Link to="/">
                            <Styled.Text size="1.2rem" style={{display: "inline-block"}}>{"<"}- Continue Shopping</Styled.Text>
                        </Link>
                    </Styled.Wrapper>
                </Styled.Section>
                <CartItems />
                
            </Fragment>
        );
    }
}
 
export default connect (mapStateToProps) (Cart);