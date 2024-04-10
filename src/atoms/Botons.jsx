import React from "react";
import styled from "styled-components";

const StyledButton = styled.button `
    font-size: 2rem;
    border: none;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    border-radius: .5rem;
    background-color: #2e2f38;
`;

function Butons({msn, accion, clas}) {
    // alert('msn')
    return (
        <StyledButton id={msn} onClick={accion} className={clas} type="button">{msn}</StyledButton>
    );
}

export default Butons;