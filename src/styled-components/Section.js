import styled from 'styled-components';

const Section = styled.section`
    display: ${props => props.display ? (props.display) : null};
`

export default Section;