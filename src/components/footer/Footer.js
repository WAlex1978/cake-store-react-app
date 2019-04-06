import React, { Component } from 'react';
import Styled from '../../styled-components/Styled';
import { Container, Row, Col } from 'shards-react';
import { Link } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookSquare, faTwitterSquare, faInstagram)

class Footer extends Component {
    render() { 
        return (
            <Styled.Section padding="90px 0 40px 0">
                <Styled.Wrapper width="70%">
                    <Container fluid>
                        <Row>
                            <Col xs={4} style={{borderRight: "1px solid"}}>
                                <Styled.Text align="center" size="1.2rem" style={{fontWeight: 400}}>
                                    Alex's Cakes
                                </Styled.Text>
                                <Styled.Text align="center" size="1.05rem">
                                    <p>They say everything looks better with odd numbers of things.</p>
                                </Styled.Text>
                            </Col>
                            <Col xs={4}>
                                <Styled.Text align="center" size="1.2rem" style={{fontWeight: 400}}>
                                    Hours
                                </Styled.Text>
                                <Styled.Text align="center" size="1.05rem">
                                    Monday - Thursday: 10am - 6pm <br/>
                                    Friday - Saturday: 11am - 4pm <br/>
                                    Sunday: Closed
                                </Styled.Text>
                            </Col>
                            <Col xs={4} style={{borderLeft: "1px solid"}}>
                                <Styled.Text align="center" size="1.2rem" style={{fontWeight: 400}}>
                                    Contact
                                </Styled.Text>
                                <Styled.Div display="flex" justify="space-around" width="50%" margin="10px auto 0 auto">
                                    <Link style={{color: "rgb(90, 97, 105)"}}><FontAwesomeIcon icon={faFacebookSquare} size="2x"/></Link>
                                    <Link style={{color: "rgb(90, 97, 105)"}}><FontAwesomeIcon icon={faTwitterSquare} size="2x"/></Link>
                                    <Link style={{color: "rgb(90, 97, 105)"}}><FontAwesomeIcon icon={faInstagram} size="2x"/></Link>
                                </Styled.Div>
                            </Col>
                        </Row>
                    </Container>
                </Styled.Wrapper>
            </Styled.Section>
        );
    }
}
 
export default Footer;