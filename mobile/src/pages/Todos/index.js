import React, { useState, useEffect } from 'react';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

import { AsyncStorage } from 'react-native';

import api from '../../services/api'

import logoImg from '../../assets/logo.png';
import crossImg from '../../assets/cross.png';
import sendImg from '../../assets/send.png';

import {
    Container,
    Logo,
    Form,
    Label,
    Input,
    SendButton,
    SendButtonImg,
    TodoList,
    TodoItem,
    TodoText,
    TodoDeleteButton,
    DeleteButtonImg
} from './styles';

function Todos() {
    let [fontsLoaded] = useFonts({
        'montserrat-alternates-regular': require('../../assets/fonts/MontserratAlternates-Regular.ttf'),
    });

    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        loadTodos()
    }, []);

    async function loadTodos() {
        try{
            const id = await AsyncStorage.getItem('authorization')

            await api.get('todos', {
                headers: {
                    authorization: id
                }
            }).then(response => {
                setTodos(response.data)
            });
        } catch(err) {
            alert('Error retrieving data fron async storage.')
        }
    }

    async function handleCreateTodo() {
        const data = {
            text,
        };

        try {
            const id = await AsyncStorage.getItem('authorization');

            await api.post('todos', data, {
                headers: {
                    authorization: id
                }
            })
        } catch(err) {
            alert('Error creating to do, please try again.')
        }
        loadTodos();
    }

    async function handleDeleteTodo(id) {
        try {
            await api.delete(`todos/${id}`);

            setTodos(todos.filter(todo => todo._id !== id));
        } catch (err) {
            return
        }
    }

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <Container>
                <Logo source={logoImg} />
                <Form>
                    <Label>What do you have to do?</Label>
                    <SendButton onPress={handleCreateTodo}><SendButtonImg source={sendImg}/></SendButton>
                    <Input onChangeText={text => setText(text)}/>
                </Form>
                <TodoList
                    data={todos}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={todo => String(todo._id)}
                    renderItem={({ item: todo }) => (
                        <TodoItem>
                            <TodoText>{todo.text}</TodoText>
                            <TodoDeleteButton onPress={() => handleDeleteTodo(todo._id)}>
                                <DeleteButtonImg source={crossImg} />
                            </TodoDeleteButton>
                        </TodoItem>
                    )}
                />
            </Container>
        )
    }
}

export default Todos;