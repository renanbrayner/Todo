import React from 'react';

import { 
    Container,
    Logo,
    CreateTodoInput,
    TodoList
} from './styles';

import logoImg from '../../assets/logo.png';

function Todos() {
    return(
        <Container>
            <Logo src={logoImg}/>
            <CreateTodoInput>
                <label for='name'>What do you have to do?</label>
                <div>
                    <button type='submit'></button>
                    <input type='name' id='name'></input>
                </div>
            </CreateTodoInput>
            <TodoList>
                <li>Do laundry<button></button></li>
                <li>Wash dishes<button></button></li>
                <li>Pick up kids at school<button></button></li>
            </TodoList>
        </Container>
    );
}

export default Todos;