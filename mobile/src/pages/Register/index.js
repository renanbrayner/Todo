import React, { useState } from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api'

import logoImg from '../../assets/logo.png';

import {
    Container,
    Logo,
    Form,
    Label,
    Input,
    Button,
    ButtonText
} from './styles';

function Register() {
    let [fontsLoaded] = useFonts({
        'montserrat-alternates-regular': require('../../assets/fonts/MontserratAlternates-Regular.ttf'),
    });

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeat, setRepeat] = useState('');

    const navigation = useNavigation();

    async function handleRegister() {
        if(password === repeat) {
            const data = {
                name,
                email,
                password,
            };
    
            try {
                const response = await api.post('register', data);
    
                alert(`Welcome ${response.data.name}!`);
    
                navigation.navigate('Login');
            } catch (err) {
                alert('Error creating new user, please try again.');
            }
        } else {
            alert('Passwords don\'t match');
        }
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return(
            <Container>
                <Logo source={logoImg}/>
                <Form>
                    <Label>Name</Label>
                    <Input onChangeText={name => setName(name)} />
                    <Label>Email</Label>
                    <Input onChangeText={email => setEmail(email)} />
                    <Label>Password</Label>
                    <Input onChangeText={password => setPassword(password)}/>
                    <Label>Repeat</Label>
                    <Input onChangeText={repeat => setRepeat(repeat)}/>
                    <Button onPress={handleRegister}>
                        <ButtonText>Sign up</ButtonText>
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default Register;