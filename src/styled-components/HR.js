import styled from 'styled-components';

const HR = styled.div`
    background-color: ${props => props.color ? (props.color) : 'rgb(51,51,51)'};
    margin: auto;
    margin-top: 15px;
    margin-bottom: 15px;
    height: 1px;
    width: 90%;
`

export default HR;