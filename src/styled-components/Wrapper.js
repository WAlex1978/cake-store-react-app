import styled from 'styled-components';

const Wrapper = styled.div`
    width: ${props => props.width ? (props.width) : '95%'};
    margin: auto;

    @media(max-width: 768px) {
        width: 100%;
    }
`

export default Wrapper;