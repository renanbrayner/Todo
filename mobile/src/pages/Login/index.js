import React, { useState } from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import { useNavigation } from '@react-navigation/native';
import { AsyncStorage } from 'react-native';

import logoImg from '../../assets/logo.png';

import api from '../../services/api';

import {
    Container,
    Logo,
    LinkEditor,
    Form,
    Label,
    Input,
    Link,
    LinkText,
    Button,
    ButtonText
} from './styles';

function Login() {
    let [fontsLoaded] = useFonts({
        'montserrat-alternates-regular': require('../../assets/fonts/MontserratAlternates-Regular.ttf'),
    });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    function navigateToRegiser() {
        navigation.navigate('Register');
    }

    function navigateToEditor() {
        navigation.navigate('Editor');
    }

    async function handleLogin(){             
        try {
            let response = await api.post('/', { email, password});
            await AsyncStorage.clear();
            await AsyncStorage.setItem('authorization', response.data.id);

            navigation.navigate('Todos');
        } catch(err) {
            alert('Error Logging in, please try again.')
        }
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Container>
                <Logo source={logoImg} />
                    <Link onPress={navigateToEditor}>
                        <LinkEditor>Editor</LinkEditor>
                    </Link>
                <Form>
                    <Label>Email</Label>
                    <Input onChangeText={email => setEmail(email)} />
                    <Label>Password</Label>
                    <Input onChangeText={password => setPassword(password)} />
                    <Link onPress={navigateToRegiser}>
                        <LinkText>Not registered? Sign up</LinkText>
                    </Link>
                    <Button onPress={handleLogin}>
                        <ButtonText>Sign in</ButtonText>
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default Login;