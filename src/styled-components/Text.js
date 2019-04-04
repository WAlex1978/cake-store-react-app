import styled from 'styled-components';

const Text = styled.div`
    color: ${props => props.color ? (props.color) : 'rgb(51,51,51)'};
    font-size: ${props => props.size ? (props.size) : null};
    margin: ${props => props.margin ? (props.margin) : null};
    padding: ${props => props.padding ? (props.padding) : null};
`

export default Text;