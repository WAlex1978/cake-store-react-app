import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'shards-react';
import Dialog from '@material-ui/core/Dialog';

import Cakes from './Cakes';
import CupCakes from './CupCakes';
import Banner from './Banner';
import Description from './Description';

import Styled from '../../styled-components/Styled';

const mapStateToProps = (state) => {
    return {
        cupcake: state.cupcake,
    }
}

class Main extends Component {
    state = {
        item: this.props.cupcake[0],
        open: false,
    }

    openDialog = (item) => {
        this.setState({ 
            item: item,
            open: true
        })
    }

    closeDialog = () => {
        this.setState({ open: false })
    }

    render() { 
        return (
            <div>
                <Banner />
                <Cakes toggle={this.openDialog} />
                <CupCakes toggle={this.openDialog} />

                <Dialog open={this.state.open} onClose={this.closeDialog} fullWidth={true} maxWidth='md'>
                    <Styled.Div display="flex" color="rgb(233, 236, 239)">
                        <Styled.Image image={this.state.item.img} height="60vh" width="60%" />
                        <Styled.Div width="50%" display="flex" direction="column" align="center" justify="center">
                            <Styled.Text size="2.4rem">{this.state.item.title}</Styled.Text>
                            <Styled.Text size="1.5rem" margin="0 0 20px 0">{this.state.item.desc}</Styled.Text>
                            <Button outline squared theme="dark">Add to Cart</Button>
                        </Styled.Div>
                    </Styled.Div>
                </Dialog>
                
            </div>
        );
    }
}
 
export default connect (mapStateToProps) (Main);