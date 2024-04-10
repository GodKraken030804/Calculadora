import { DataSet, Network } from 'vis-network/standalone/esm/vis-network';


function parseExpression(containerId, tokens) {
    let nodes = [];
    let edges = [];

    tokens.forEach((token, index) => {
        nodes.push({ id: index, label: token, mass: 2 }); // Modificado para crear objetos planos para vis.DataSet
    });

    for (let i = 1; i < tokens.length; i += 2) {
        let operatorIndex = i;
        let leftOperandIndex = i - 1;
        let rightOperandIndex = i + 1;

        // Asegurándonos de que el índice no se salga del rango para el operando derecho
        if (rightOperandIndex < tokens.length) {
            edges.push({ from: operatorIndex, to: leftOperandIndex });
            edges.push({ from: operatorIndex, to: rightOperandIndex });
        }
    }

    let container = document.getElementById(containerId);
    let data = {
        nodes: new DataSet(nodes),
        edges: new DataSet(edges)
    };
    let options = {
        layout: {
            hierarchical: {
                direction: 'UD', // De arriba hacia abajo
                sortMethod: 'directed'  // Asegura que el layout siga la dirección de las aristas
            }
        },
        nodes: {
            shape: 'circle', // Forma del nodo
            color: '#006eff', // Color del nodo
            font: { size: 40 } // Tamaño de la fuente del nodo
        },
        edges: {
            color: '#000000', // Color de la arista
            smooth: {
                enabled: true, // Hace que las aristas sean suaves
                type: 'continuous' // Tipo de suavizado
            }
        }
    };

    // Corrección aquí: asegurándonos de usar el operador 'new' al instanciar Network
    let network = new Network(container, data, options);
}
export default parseExpression;
