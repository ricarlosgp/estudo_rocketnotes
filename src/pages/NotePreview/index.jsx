import { Container} from './styles'; //importando o Container do arquivo styles.js do NotePreview e esse { Container } foi criado e exportado no arquivo styles.js é toda estilização do export const Container = styled.div 
import { Header } from '../../components/Header'; //importando todo components { Header }
import { Button } from '../../components/Button';

export function NotePreview() { //criando e exportando uma função/function chamada de NotePreview(o nome da função têm que ser idêntico ao nome da pages NotePreview) que vai retornar/return:

    return ( //retornando o { Container } que foi importado acima e vai receber o components Header
        <Container>
            <Header /> 
            <Button />     
            <Button />                 
        </Container>
    )
}