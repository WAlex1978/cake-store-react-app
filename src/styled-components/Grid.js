import styled from 'styled-components';

const Grid = styled.div`
    display: grid;
    grid-template-col: 1fr 1fr;
    grid-template-row: auto;
    grid-row-gap .5rem;

    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
        margin: auto;
    }
`

export default Grid;