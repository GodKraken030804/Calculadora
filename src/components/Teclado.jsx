import React from "react";
import styled from "styled-components";
import Butons from "../atoms/Botons";
import Pantalla from "../atoms/Pantalla"; 

const StyledTeclado = styled.div`
    display: grid;
    height: 89vh;
    border-radius: 2rem;
    aspect-ratio: 9/17;
    padding: .15rem;
    grid-template-columns: repeat(4, 1fr);
    gap: .5rem;
    background-color: #17171c;
    .operacion{
        background-color: #5d5df7;
        color: #2e2f38;
    }
    .otro{
        background-color: #4e505f;
    }
    .igual{
        background-color: #ffffff;
    }
    button:active{
        transform: scale(1.1);
    }
`;

function Teclado({accion, operacion}) {
    // alert(valores)
    const valores = ['DEL', 'AC', '(', ')', 7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, '/', 0, '.', '=', '*'];
    return (
        <StyledTeclado>
            <Pantalla msn={operacion}/>
            {
                valores.map((valor)=>{
                    if(valor==='+'||valor==='-'||valor==='/'||valor==='*'){
                        return <Butons accion={accion} msn={valor} clas={'operacion'}/>
                    }else if(valor==='DEL'||valor==='AC'||valor==='('||valor===')'){
                        return <Butons accion={accion} msn={valor} clas={'otro'}/>
                    }else if (valor==='='){
                        return <Butons accion={accion} msn={valor} clas={'igual'}/>
                    }
                    return <Butons accion={accion} msn={valor}/>
                })
            }
        </StyledTeclado>
    );
}

export default Teclado;