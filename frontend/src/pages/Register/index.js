import React from 'react';

import { 
    Container,
    Logo,
    Form
} from './styles';

import logoImg from '../../assets/logo.png';

function Register() {
    return(
        <Container>
            <Logo src={logoImg}/>
            <Form>
                <label for='name'>Name</label>
                <input type='name' id='name'></input>
                <label for='email'>Email</label>
                <input type='email' id='email'></input>
                <label for='password'>Password</label>
                <input type='password' id='password'></input>
                <label for='password'>Repeat</label>
                <input type='password' id='password'></input>
                <button type='submit'>Sign up</button>
            </Form>
        </Container>
    );
}

export default Register;