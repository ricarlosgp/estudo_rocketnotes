import { Container } from './styles';
import { Form } from './styles';
import { Avatar } from './styles';

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'; //importando ícones da biblioteca de ícones
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Profile() {
    return (

        <Container>
            <header> 
                <a href="/">
                    <FiArrowLeft />

                </a>
            </header>

            <Form>
                <Avatar>                   
                    
                    <label htmlFor="avatar">
                        <FiCamera />

                        <input
                            id="avatar"
                            type="file"                
                        />
                    </label>

                </Avatar>
                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}                
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}                
                />

                <Input
                    placeholder="Senha atual"
                    type="password"
                    icon={FiLock}                
                />

                <Input
                    placeholder="Nova senha"
                    type="password"
                    icon={FiLock}                
                />

                <Button title="Salvar" />

            </Form>


        </Container>
    )
}

/*
Dentro do header(cabeçalho) coloquei um link de uma seta de voltar que vai apontar para home(<a href="/">)



*/