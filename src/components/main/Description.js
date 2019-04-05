import React, { Component } from 'react';
import Styled from '../../styled-components/Styled';

class Description extends Component {
    render() { 
        return (
            <Styled.Section >
                <Styled.Wrapper width="60%" style={{marginTop: "15px"}}>
                    <Styled.Text size="2.4rem" align="center">
                        Just as unique and special as you are.
                    </Styled.Text>
                    <Styled.Text size="1.3rem" margin="5px">
                        <p>The only prerequisite is that it makes you happy. If it makes you happy then it's good. 
                        We don't really know where this goes - and I'm not sure we really care. 
                        Maybe there's a happy little waterfall happening over here. 
                        Let your imagination be your guide. Maybe there's a little something happening right here.</p>
                    </Styled.Text>
                </Styled.Wrapper>
            </Styled.Section>
        );
    }
}
 
export default Description;