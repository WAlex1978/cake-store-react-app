import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import Section from '../../styled-components/Section';
import Wrapper from '../../styled-components/Wrapper';
import Image from '../../styled-components/Image';
import Text from '../../styled-components/Text';
import HR from '../../styled-components/HR';

const mapStateToProps = (state) => {
    return {
        cupcake: state.cupcake,
    }
}

const StyledDiv = styled.div`
    display: ${props => props.display ? (props.display) : null};
    width: ${props => props.width ? (props.width) : null};
    height: ${props => props.height ? (props.height) : null};
    flex-direction: ${props => props.direction ? (props.direction) : null};
    align-items: ${props => props.align ? (props.align) : null};
    justify-content: ${props => props.justify ? (props.justify) : null};
    grid-column: ${props => props.col ? (props.col) : null};
    grid-row: ${props => props.row ? (props.row) : null};
`

const Grid = styled.div`
    display: grid;
    grid-template-col: 1fr 1fr;
    grid-template-row: auto;
    grid-row-gap .5rem;

    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
        margin: auto;
    }
`

class CupCakes extends Component {
    render() { 
        return (
            <Section>
                <Wrapper>
                    <Text size="2.8rem" margin="auto">Cupcakes</Text>
                    <HR />
                    <Grid>
                        {this.props.cupcake.map((cupcake, i) => (
                            <StyledDiv key={cupcake.id} display="flex" col={i%2 === 0 ? (1): 2}>
                                <Image image={cupcake.img} height="35vh" width="45%" />
                                <StyledDiv width="60%" display="flex" direction="column" align="center" justify="center">
                                    <Text size="2.4rem">{cupcake.title}</Text>
                                    <Text>{cupcake.desc}</Text>
                                </StyledDiv>
                            </StyledDiv>
                        ))}
                    </Grid>
                </Wrapper>
            </Section>
        );
    }
}
 
export default connect (mapStateToProps) (CupCakes);