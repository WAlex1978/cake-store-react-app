import React, { Component } from 'react';
import { connect } from 'react-redux';

// Library of styled components
import Styled from '../../styled-components/Styled';

const mapStateToProps = (state) => {
    return {
        cake: state.cake,
    }
}

// Component that displays all cake items in the store
// Loops through all cakes and displays two columns per row
class Cakes extends Component {
    render() { 
        return (
            <Styled.Section top="20px" bottom="20px">
            {/* Section with a top and bottom padding of 20px each */}

                <Styled.Wrapper>
                    <Styled.Grid>

                        {/* Loops through state for every cake item */}
                        {/* Displays every item in a two column layout */}

                        {this.props.cake.map((cake, i) => (
                            
                            <Styled.Div key={cake.id} display="flex" col={i%2 === 0 ? (1): 2} 
                                style={{cursor: "pointer"}} onClick={() => this.props.toggle(cake)}>
                                {/* For each item, display two columns */}
                                {/* Mouse becomes pointer on hover */}
                                {/* On click calls main page to open dialog */}

                                {/* Left column, display cake image */}
                                <Styled.Image image={cake.img} height="32vh" width="45%" />

                                {/* Right column, title and description */}
                                <Styled.Div width="55%" display="flex" direction="column" align="center" justify="center">
                                    <Styled.Text size="2.4rem">{cake.title}</Styled.Text>
                                    <Styled.Text>{cake.desc}</Styled.Text>
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