//estilizando toda a página NotePreview

import styled from 'styled-components'; //importando o styled do styled-components
//styled é uma biblioteca de estilização localizada no styled-components.
// styled-components é uma biblioteca do ecossistema React que permite escrever estilos CSS de forma mais intuitiva e dinâmica e fica no arquivo package.json.
//sempre irei utilizar esse código quando eu tiver .js e .index.jsx

export const Container = styled.div`
    width: 100%; 
    height: 100vh; 
    display: grid; 
    grid-template-rows: 105px auto; 
    grid-template-areas: 
    "header" 
    "content"
`; 



/*
//exportando uma variável constante chamada de Container que recebe do meu styled uma div e dentro da tag semântica irei estilizar para minha página NotePreview:
    
    width: 100%; //toda largura da minha página NotePreview terá 100% da tela ocupada 
    height: 100vh; //toda altura terá 100vh ou 100% da altura da tela.  
    
    display: grid; //exibir o Container no formato de grid
    grid-template-rows: 105px auto; //definindo um grid-template-rows pois terei duas linhas na minha página NotePreview sendo uma para o cabeçalho e outra para o conteúdo. A primeira linha terá uma altura de 105px e a restante como auto para ser definida automaticamente pelo conteúdo
    grid-template-areas: //definindo um grid-template-areas para nomear essas linhas que chamarão de header e content
    "header"
    "content"

`;
*/