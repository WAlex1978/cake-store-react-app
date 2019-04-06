import React, { Component } from 'react';
import { Row, Col } from 'shards-react';
import { connect } from 'react-redux';
import Styled from '../../styled-components/Styled';

const mapStateToProps = (state) => {
    return {
        total: state.total,
    }
}

class CartFooter extends Component {
    render() { 
        return (
            <Styled.Text size="1.4rem" align="right">
                <Row>
                    <Col xs={8} />
                    <Col xs={2}>Total:</Col>
                    <Col xs={2}>${this.props.total.toFixed(2)}</Col>
                </Row>
            </Styled.Text>
        );
    }
}
 
export default connect (mapStateToProps) (CartFooter);