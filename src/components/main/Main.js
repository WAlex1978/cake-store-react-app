import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Badge } from 'shards-react';
import Dialog from '@material-ui/core/Dialog';

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
                <Description />
                <CupCakes toggle={this.openDialog} />

                <Dialog open={this.state.open} onClose={this.closeDialog} fullWidth={true} maxWidth='md'>
                    <Styled.Div display="flex">
                        <Styled.Image image={this.state.item.img} height="60vh" width="60%" />
                        <Styled.Div width="50%" display="flex" direction="column" align="center" justify="center">
                            <Styled.Text size="2.4rem">{this.state.item.title}</Styled.Text>
                            <Styled.Text size="1.5rem">{this.state.item.desc}</Styled.Text>
                            <Badge outline theme="dark">Add to Cart</Badge>
                        </Styled.Div>
                    </Styled.Div>
                </Dialog>
                
            </div>
        );
    }
}
 
export default connect (mapStateToProps) (Main);