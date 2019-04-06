import React, { Component, Fragment } from 'react';
import { addToCart } from '../actions/StoreActions';
import { connect } from 'react-redux';
import { Button } from 'shards-react';
import Dialog from '@material-ui/core/Dialog';

import Description from './Description';
import Cakes from './Cakes';
import CupCakes from './CupCakes';
import Styled from '../../styled-components/Styled';

const mapStateToProps = (state) => {
    return {
        cake: state.cake,
        cart: state.cart,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addToCart: (item, quantity) => {dispatch(addToCart(item, quantity))}
    }
}

class Main extends Component {
    state = {
        item: this.props.cake[0],
        quantity: "",
        open: false,
    }

    addToCart = (item, quantity) => {
        this.props.addToCart(item, quantity);
        this.setState({ 
            open: false,
            quantity: "",
        })
    }

    openDialog = (item) => {
        this.setState({ 
            item: item,
            open: true
        })
    }

    closeDialog = () => {
        this.setState({ 
            open: false,
            quantity: 1,
        })
    }
    
    updateQty = e => {
        if (e.target.validity.valid && e.target.value >= 0 && e.target.value <= 50) {
            this.setState({ quantity: e.target.value });
        }
    }

    render() {
        return (
            <Fragment>
                <Cakes toggle={this.openDialog} />
                <Description />
                <CupCakes toggle={this.openDialog} />

                <Dialog open={this.state.open} onClose={this.closeDialog} fullWidth={true} maxWidth='md'>
                    <Styled.Div display="flex" color="rgb(255, 224, 248)">
                        <Styled.Image image={this.state.item.img} height="60vh" width="60%" />
                        <Styled.Div width="40%" margin="10px" display="flex" direction="column" align="center" justify="center">
                            <Styled.Text size="2.1rem">{this.state.item.title}</Styled.Text>
                            <Styled.Text size="1.4rem" margin="0 0 5px 0">{this.state.item.desc}</Styled.Text>
                            <Styled.Text size="1.2rem" margin="0 5px 50px 0" style={{}}>
                                ${this.state.item.price.toFixed(2)}
                            </Styled.Text>

                            <Styled.Div display="flex" margin="0 0 10px 0">
                                <Styled.Text size="1.2rem" margin="0 5px 0 0">Quantity:</Styled.Text>
                                <input type="number" value={this.state.quantity} onChange={this.updateQty}
                                style={{width: "80px"}}/>
                            </Styled.Div>

                            <Button squared theme="dark" onClick={() => this.addToCart(this.state.item, this.state.quantity)}
                                >Add to Cart</Button>
                        </Styled.Div>
                    </Styled.Div>
                </Dialog> 
            </Fragment>
        );
    }
}
 
export default connect (mapStateToProps, mapDispatchToProps) (Main);