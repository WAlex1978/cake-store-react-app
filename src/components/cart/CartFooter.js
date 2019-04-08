import React, { Component, Fragment } from 'react';
import { Button, Row, Col } from 'shards-react';
import { connect } from 'react-redux';
import Styled from '../../styled-components/Styled';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'

library.add(faLock)

const mapStateToProps = (state) => {
    return {
        total: state.total,
    }
}

class CartFooter extends Component {
    render() { 
        return (
            <Fragment>

                {/* Total cost of cart items*/}
                <Styled.Text size="1.4rem">
                    <Row>
                        <Col xs={9} />
                        <Col xs={1}>Total:</Col>
                        <Col xs={2} style={{textAlign: "right"}}>${this.props.total.toFixed(2)}</Col>
                    </Row>
                </Styled.Text>

                {/* Checkout button */}
                {/* Uses font awsome for icon */}
                <Row>
                    <Col xs={9} />
                    <Col xs={3} style={{marginTop: "30px"}}>
                        <Button block squared theme="success">
                            <FontAwesomeIcon icon={faLock} style={{marginRight: "5px"}}/>
                            Checkout
                        </Button>
                    </Col>
                </Row>
                
            </Fragment>

        );
    }
}
 
export default connect (mapStateToProps) (CartFooter);