//após estilizar todo o styles.js do meu header eu preciso ir no arquivo de index.jsx para criar a estrutura do styles

import styled from 'styled-components'; //importando o styled do styled-components
//styled é uma biblioteca de estilização localizada no styled-components.
// styled-components é uma biblioteca do ecossistema React que permite escrever estilos CSS de forma mais intuitiva e dinâmica e fica no arquivo package.json.

export const Container = styled.div` //exportando uma variável constante chamada de Container que recebe do meu styled o header/cabeçalho e dentro da tag semântica irei estilizar o meu header/cabeçalho
    //background: red; //colocando plano de fundo no header na cor vermelha
    grid-area: header; // fixando o cabeçalho/header ou seja: ao rolar a minha tela o cabeçalho vai ficar fixo

    height: 105px; //altura do cabeçalho de 105px
    width: 100%;  //largura de 100% para ocupar do que estiver disponível na tela

    border-bottom-width: 1px; //definindo a largura/width da borda/border inferior/bottom do header para 1px. É a linha inferior da caixa ou retângulo do header
    border-bottom-style: solid; //definindo o estilo de linha da borda inferior como sólido ou seja: não vai ser tracejado ou ponteado
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700}; //definindo a cor de linha da borda inferior a partir do theme para BACKGROUND_700

    display: flex; //dentro do meu header/cabeçalho os elementos serão organizados em linha
    justify-content: space-between; //Os itens são distribuídos uniformemente dentro do contêiner de alinhamento ao longo do eixo principal. Nesse caso os container: Profile e Logout irão ficar alinhados à esquerda(Profile) e à direita o (botão sair). Para utilizar o justify-content primeiro temo que colocar o display:flex
    
    padding: 0 80px; //preenchimento zerado em cima e embaixo e 80 px nas laterais(esquerdo e direito)

    @media (max-width: 800px) { //fazendo o responsivo para o meu container que é a caixa do header contendo a caixa Profile e caixa Logout. Quando o máximo de largura for 800px
       padding: 0 2rem; 
       background: green;
    }
    @media (max-width:294px) {
        //background: green;
        padding: 0 2rem; 
    }
    @media (max-width:260px) {
        
        align-items:center;
        height: 50px;
    }
     
`;
export const Profile = styled.div` //exportando e criando uma const chamada Profile(caixa de cor verde) que recebe uma estilização ou styled que é uma div ou styled.div para estilizar o seguinte: 
   // background:green; //cor de preenchimento da caixa profile
    
    display: flex; //os itens da caixa Profile(caixa de cor verde) são posicionados de maneira sequencial da esquerda para a direita horizontalmente
    align-items: center; //os itens contido na caixa Profile(de cor verde) serão alinhados ao centro da caixa Profile
    > img { //pegando a primeira > img de dentro do Profile e estilizando: 
        width: 56px; //largura de 56px
        height: 56px; //altura de 56 px
        border-radius: 50%; //cantos arredondados da img de 50% ou seja, vai ficar img redonda   
        margin-left: -0.7rem;
    }

    > div { //pegando a primeira > div do Profile e estilizando. Essa div contêm o span e strong
        //background: orange ; //cor da caixa div
        display: flex;
        flex-direction: column; //direção flexiva da div será em coluna ou seja, os itens span e strong serão empilhados verticalmente.
        margin-left:16px; //deslocando a margem esquerda da caixa div para 16px e ao fazer isso toda a caixa Profile de cor verde irá aumentar a largura para direita
        line-height: 24px; //espaçamento entre span(bem vindo) e strong(ricarlos guimarães) 

        span { //estilizando meu span(Bem vindo,)
            font-size: 14px;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }

        strong { //estilizando meu strong(Ricarlos Guimarães)
            font-size: 18px;
            color: ${({ theme }) => theme.COLORS.WHITE};
        }
}  

@media (min-width: 261px) and (max-width: 294px) {
    > div {
        strong {
            font-size: 1.4rem;
        }
    }
}

@media (max-width:260px) {
    //background: yellow;
    width: 12.4rem;
    margin-left:-1rem;
    margin-right:-4rem;
    
    > img {
        width: 36px; 
        height: 36px; 
        border-radius: 50%;  
        margin-left:0.2rem ;
        
    }
    > div {
        //background: blue;
        margin-left:0; 

        span {
            font-size: 1rem;
        }
        strong {
            font-size: 1rem;
        }
    }
} 
     
`;
export const Logout = styled.button`//exportando e criando uma const chamada Logout(botão de logout à direita do header) que recebe uma estilização ou styled do tipo button e dentro da tag semântica irei estilizar o meu botão da seguinte forma:
    background: none; //sem preenchimento
    border: none; //sem bordas    

    > svg { //o botão é um svg e está dentro de Logout com nome de RiShutDownLine em index.jsx 
        color: ${({ theme }) => theme.COLORS.GRAY_100}; //cor do botão
        font-size: 36px; //tamanho do botão        
    }  

    @media (max-width:260px){
        //background: white;
        margin-left: 4rem;
        > svg {
            font-size: 2rem;
        }
    }    
   
`; 


