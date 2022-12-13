import styled from 'styled-components';

export const Titulo = styled.h1`
    font-size: ${props => props.size};
    font-weight: 600;
    color:${props => props.color};
    font-family: ${props => props.family};
`