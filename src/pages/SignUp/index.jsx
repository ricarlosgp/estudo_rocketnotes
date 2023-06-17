import { Container } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { SignUpImg } from './styles';

import { FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Form } from './styles';


export function SignUp() {
    return (
        <Container>
            <SignUpImg />
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Crie sua conta</h2>

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
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title= "Cadastrar" />

                <a href="#">
                    Voltar para o login
                </a>
            </Form>
            
        </Container>
    );

}

/*
A nossa aplicação ainda não tem rotas de navegação ou seja, ela não tem navegação. Irei implementar, mas por enquanto a gente precisa vir aqui na nossa main.jsx e fazer importação aqui da nossa SignIn. 


*/