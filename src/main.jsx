//Main é o principal arquivo e sem ele não conseguimos renderizar as páginas. 
//O nome do import fica a critério do desenvolvedor porém o ideal é colocar com o mesmo nome do component, page ou arquivo a ser importado
//Sempre que houver uma importação entre chaves{} é porque houve uma exportação sem a utilização do default após a palavra export. 
import React from 'react'; //importando o React do próprio react. React é uma biblioteca JavaScript. Uma das principais características do React é o uso do Virtual DOM (DOM Virtual). Essa biblioteca react fica na pasta node_modules dentro da pasta react.
import ReactDOM from 'react-dom/client'; //ReactDOM é uma biblioteca do React que fornece métodos e funcionalidades para manipular o DOM (Document Object Model) e atualizar dinamicamente os elementos da interface com base no estado dos componentes. Ou seja, ReactDOM é uma biblioteca para manipular os elementos que fazem parte da página 


import { ThemeProvider } from 'styled-components'; // importando o ThemProvider de dentro do 'styled-components' e o ThemProvider é uma biblioteca que vai prover um tema global que vai ser o theme.js
import theme from './styles/theme'; //importando o theme.js de styles
import GlobalStyles from './styles/global'; //importando o {createGlobalStyle} da pasta styles e do arquivo global.js
import { NotePreview } from '../src/pages/NotePreview' //importando toda minha página NotePreview de src/pages/NotePreview 


ReactDOM.createRoot(document.getElementById('root')).render(//O react está utilizando o ReactDOM para selecionar e pegar dentro do meu document um elemento pelo ID e o nome desse elemento é o root que vai ser renderizado, que vai ser inserido ali um conteúdo que iremos inserir dentro de <React.StrictMode>  
  <React.StrictMode>
    <ThemeProvider theme={ theme }> 
      <GlobalStyles />
      <NotePreview /> 
         
    </ThemeProvider>    
  </React.StrictMode>
)

/*
<React.StrictMode>
    <ThemeProvider theme={ theme }> //estou aplicando o theme.js que é global para os componentes: GlobalStyles, NotePreview 
      <GlobalStyles /> //renderizando meus estilos global 
      <NotePreview /> //renderizando minha page NotePreview
      
    </ThemeProvider>
  </React.StrictMode>,

*/