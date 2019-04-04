import styled from 'styled-components';

const Div = styled.div`
    display: ${props => props.display ? (props.display) : null};
    width: ${props => props.width ? (props.width) : null};
    height: ${props => props.height ? (props.height) : null};
    flex-direction: ${props => props.direction ? (props.direction) : null};
    align-items: ${props => props.align ? (props.align) : null};
    justify-content: ${props => props.justify ? (props.justify) : null};
    grid-column: ${props => props.col ? (props.col) : null};
    grid-row: ${props => props.row ? (props.row) : null};
`

export default Div;