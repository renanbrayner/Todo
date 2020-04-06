import React, { useState, useEffect } from 'react';
import UIfx from 'uifx';

import api from '../../services/api';

import { 
    Container,
    Logo,
    CreateTodoInput,
    TodoList
} from './styles';

import logoImg from '../../assets/logo.png';
import sfx from '../../assets/pop.mp3';

function Todos() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');

    const id = sessionStorage.getItem('authorization');

    const pop = new UIfx(sfx, {
        volume: 1,
        throttleMs: 100
    });

    useEffect(() => {
        loadTodos()
    }, [id]);

    async function loadTodos() {
        api.get('todos', {
            headers: {
                authorization: id,
            }
        }).then(response => {
            setTodos(response.data)
        })
    }

    async function handleCreateTodo(e) {
        e.preventDefault();

        const data = {
            text,
        };

        try {
            await api.post('todos', data, {
                headers: {
                    authorization: id,
                }
            })
        } catch(err) {
            alert('Error creating to do, please try again.')
        }
        loadTodos()
    }

    async function handleDeleteTodo(id) {
        try {
            await api.delete(`todos/${id}`);

            setTodos(todos.filter(todo => todo._id !== id));
        } catch(err) {
            alert('Error deleting todo, please try again.');
        }
        pop.play();
    }

    return(
        <Container>
            <Logo src={logoImg}/>
            <CreateTodoInput onSubmit={handleCreateTodo}>
                <label for='name'>What do you have to do?</label>
                <div>
                    <button type='submit'></button>
                    <input type='name' id='name' value={text} onChange={e => setText(e.target.value)}></input>
                </div>
            </CreateTodoInput>
            <TodoList>
                {/* <li>Do laundry<button></button></li> */}
                {todos.map(todo => (
                    <li key={todo._id}>{todo.text}<button onClick={() => handleDeleteTodo(todo._id)} type='button'></button></li>
                ))}
            </TodoList>
        </Container>
    );
}

export default Todos;