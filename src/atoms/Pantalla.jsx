import React from "react";
import styled from "styled-components";

const StyledPantalla = styled.label`
    grid-column: span 4;
    text-align: right;
    font-size: 4rem;
    height: 4rem;
    color: gray;
`;

function Pantalla({msn}) {
    return (
        <StyledPantalla id="operacion">{msn}</StyledPantalla>
    );
}

export default Pantalla;