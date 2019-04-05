import React, { Component } from 'react';
import { connect } from 'react-redux';

import Styled from '../../styled-components/Styled';

const mapStateToProps = (state) => {
    return {
        cake: state.cake,
    }
}

class Cakes extends Component {
    render() { 
        return (
            <Styled.Section padding="40px 0 0 0">
                <Styled.Wrapper>
                    <Styled.Text size="2.8rem">Cakes</Styled.Text>
                    <Styled.HR />
                    <Styled.Grid>
                        {this.props.cake.map((cake, i) => (
                            <Styled.Div key={cake.id} display="flex" col={i%2 === 0 ? (1): 2} 
                                style={{cursor: "pointer"}} onClick={() => this.props.toggle(cake)}>
                                <Styled.Image image={cake.img} height="32vh" width="55%" />
                                <Styled.Div width="60%" display="flex" direction="column" align="center" justify="center">
                                    <Styled.Text size="2.4rem">{cake.title}</Styled.Text>
                                    <Styled.Text size="1.5rem">{cake.desc}</Styled.Text>
                                </Styled.Div>
                            </Styled.Div>
                        ))}
                    </Styled.Grid>
                </Styled.Wrapper>
            </Styled.Section>
        );
    }
}
 
export default connect (mapStateToProps) (Cakes);