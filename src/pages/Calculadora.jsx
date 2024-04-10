import React from "react";
import styled from "styled-components";
import Teclado from "../components/Teclado";
import { useState } from "react";
import parseExpression from "./Arbol";

const StyledCalculadora = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: repeat(3, 1fr);
    .arbolOperaciones{
        border: 2px solid;
        width: 100%;
        height: 95vh;
        background-color: #ffae00;
    }
    .lexico{
        display: flex;
        flex-direction: column;
        font-size: 2rem;
        border: 2px solid;
        margin-left: 2%;
        width: 100%;
        height: 95vh;
        background-color: #ffae00;
    }
`;
function getTokenType(token) {
    if (!isNaN(token)) {
        return 'numérico';
    }
    switch (token) {
        case '+':
            return 'operador suma';
        case '-':
            return 'operador resta';
        case '/':
            return 'operador división';
        case '*':
            return 'operador multiplicación';
        case '(':
            return 'paréntesis izquierdo';
        case ')':   
            return 'paréntesis derecho';
        case '.':   
            return 'punto decimal';
        default:
            return 'desconocido';
    }
}
let letras = new Array();
let cadena = ''
function Calculadora() {
    const [operacion, setOperacion] = useState()
    const hacerOperacion=()=>{
        if(cadena!=='Error'){
            try {
                const resultado = eval(cadena )
                cadena = cadena.replace(/[()]/g, '');
                const operacion = cadena.match(/\d+|\D/g);
                parseExpression ("network", operacion)
                return resultado; // Utilizamos eval para evaluar la expresión
            } catch (error) {
                return 'Error'; // Manejar errores en caso de que la expresión sea inválida
            }
        }else return 'Error'
    }
    const mostrarOperacion = (e) =>{
        if (e.target.innerText!=='AC'){
            if(e.target.innerText!=='='){
                if(e.target.innerText!=='DEL'){
                    letras.push(e.target.innerText)
                    if (letras.length>0){
                        cadena=''
                        for(let i = 0; i<letras.length; i++){
                            cadena+=letras[i]
                        }
                    }
                }else if(letras.length!=0){
                    letras.splice(letras.length-1, 1)
                    if (letras.length>0){
                        cadena=''
                        for(let i = 0; i<letras.length; i++){
                            cadena+=letras[i]
                        }
                    }else{
                        cadena=''
                    }
                }
            }else{
                cadena=hacerOperacion()
            }
        }else{
            letras.splice(0, letras.length)
            cadena=''
        }
        setOperacion(cadena)
    }
    return (
        <StyledCalculadora>
            
            <div className="lexico">
                {letras.map((letra, index)=>(
                    <p className="estiloImpresion" key={index}>Line {index + 1}: Generado por el Token "{letra}" </p>
                )) }
            </div>
            <Teclado operacion={operacion} accion={mostrarOperacion}/>
            <div id="network" className="arbolOperaciones"></div>
        </StyledCalculadora>
    );
}

export default Calculadora;