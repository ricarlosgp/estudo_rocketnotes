import { Container } from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ImgSignin } from './styles';

import { FiMail, FiLock } from 'react-icons/fi';
import { Form } from './styles';


export function SignIn() {
    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis.</p>

                <h2>Faça seu login</h2>

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

                <Button title= "Entrar" />

                <a href="#">
                    Criar conta
                </a>
            </Form>
            <ImgSignin />
            
        </Container>
    );

}

/*
A nossa aplicação ainda não tem rotas de navegação ou seja, ela não tem navegação. Irei implementar, mas por enquanto a gente precisa vir aqui na nossa main.jsx e fazer importação aqui da nossa SignIn. 


*/