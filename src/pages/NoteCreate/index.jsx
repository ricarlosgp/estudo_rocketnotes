import { Header } from '../../components/Header';//importando o components Header para ser exportado na função NoteCreate abaixo 
import { Input } from '../../components/Input'; //importando o components Input para ser exportado na função NoteCreate abaixo 
import { Textarea } from '../../components/Textarea'; //importando o components Textarea para ser exportado na função NoteCreate abaixo 

import {Container} from './styles';
import { Form } from './styles';


export function NoteCreate(){ //criando e exportando uma função para o nosso componente ou para página NoteCreate que vai retornar/return
    return(//retornando o Container estilizado no styles.js que vai renderizar: header
        <Container>
            <Header />

            <main> {/*abaixo do header está minha página principal ou main e dentro do main irei estruturar um Form: */}
                <Form> {/*dentro do form terei um header/cabeçalho que vai conter um h1 e um link que irei colocar como uma barra */}
                    <header>
                        <h1>Criar nota</h1>
                        <a href="/">voltar</a>
                    </header>

                    <Input placeholder="Título" /> {/*importando meu components Input e colocando um place holder de título */}

                    <Textarea placeholder="Observações" /> {/*importando meu components Textarea e colocando um place holder de título Observações. Esse placeholder foi estilizado no components Textarea */}
                </Form>

            </main>
        </Container>

    );


}