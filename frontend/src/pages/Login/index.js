import React from 'react';
import { Link } from 'react-router-dom';

import { 
    Container,
    Logo,
    Form
} from './styles';

import logoImg from '../../assets/logo.png';

function Login() {
    return(
        <Container>
            <Logo src={logoImg}/>
            <Form>
                <label for='email'>Email</label>
                <input type='text' id='email'></input>
                <label for='password'>Password</label>
                <input type='password' id='password'></input>
                <Link className='link' to='/register'>Not registered? Sign up</Link>
                <button type='submit'>Sign in</button>
            </Form>
        </Container>
    );
}

export default Login;