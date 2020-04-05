import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import { 
    Container,
    Logo,
    Form
} from './styles';

import logoImg from '../../assets/logo.png';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeat, setRepeat] = useState('');

    const history = useHistory()

    async function handleRegister(e) {
        e.preventDefault();

        if(password === repeat) {
            const data = {
                name,
                email,
                password,
            };
    
            try {
                const response = await api.post('register', data);
    
                alert(`Welcome ${response.data.name}!`);
    
                history.push('/');
            } catch (err) {
                alert('Error creating new user, please try again.');
            }
        } else {
            alert('Passwords don\'t match');
        }
    }

    return(
        <Container>
            <Logo src={logoImg}/>
            <Form onSubmit={handleRegister}>
                <label htmlFor='name'>Name</label>
                <input 
                    type='text' 
                    id='name' 
                    value={name} 
                    onChange={e => setName(e.target.value)}
                />
                <label htmlFor='email'>Email</label>
                <input 
                    type='email' 
                    id='email'
                    value={email} 
                    onChange={e => setEmail(e.target.value)}                    
                />
                <label htmlFor='password'>Password</label>
                <input 
                    type='password' 
                    id='password'
                    value={password} 
                    onChange={e => setPassword(e.target.value)}                    
                />
                <label htmlFor='password_repeat'>Repeat</label>
                <input 
                    type='password' 
                    id='password_repeat'
                    value={repeat} 
                    onChange={e => setRepeat(e.target.value)}                    
                />
                <button type='submit'>Sign up</button>
            </Form>
        </Container>
    );
}

export default Register;