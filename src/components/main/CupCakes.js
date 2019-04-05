import React, { Component } from 'react';
import { connect } from 'react-redux';

import Styled from '../../styled-components/Styled';

const mapStateToProps = (state) => {
    return {
        cupcake: state.cupcake,
    }
}

class CupCakes extends Component {
    render() { 
        return (
            <Styled.Section padding="40px 0 0 0">
                <Styled.Wrapper>
                    <Styled.Grid>
                        {this.props.cupcake.map((cupcake, i) => (
                            <Styled.Div key={cupcake.id} display="flex" col={i%2 === 0 ? (1): 2} 
                                style={{cursor: "pointer"}} onClick={() => this.props.toggle(cupcake)}>
                                <Styled.Image image={cupcake.img} height="32vh" width="55%" />
                                <Styled.Div width="60%" display="flex" direction="column" align="center" justify="center">
                                    <Styled.Text size="2.4rem">{cupcake.title}</Styled.Text>
                                    <Styled.Text size="1.5rem">{cupcake.desc}</Styled.Text>
                                </Styled.Div>
                            </Styled.Div>
                        ))}
                    </Styled.Grid>
                </Styled.Wrapper>
            </Styled.Section>
        );
    }
}
 
export default connect (mapStateToProps) (CupCakes);