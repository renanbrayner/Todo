import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import { 
    Container,
    Logo,
    Form
} from './styles';

import logoImg from '../../assets/logo.png';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try{
            const response = await api.post('/', { email, password });

            sessionStorage.setItem('authorization', response.data.id);

            history.push('/todos');
        } catch (err) {
            alert('Error logging in, please try again.');
        }
    }

    return(
        <Container>
            <Logo src={logoImg}/>
            <Form onSubmit={handleLogin}>
                <label for='email'>Email</label>
                <input 
                    type='text' 
                    id='email' 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                />
                <label for='password'>Password</label>
                <input 
                    type='password' 
                    id='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Link className='link' to='/register'>Not registered? Sign up</Link>
                <button type='submit'>Sign in</button>
            </Form>
        </Container>
    );
}

export default Login;