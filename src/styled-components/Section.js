import styled from 'styled-components';

const Section = styled.section`
    background-color: ${props => props.color ? (props.color) : "rgb(244, 239, 225)"};
    display: ${props => props.display ? (props.display) : null};
    margin: ${props => props.margin ? (props.margin) : null};
    padding: ${props => props.padding ? (props.padding) : null};
`

export default Section;