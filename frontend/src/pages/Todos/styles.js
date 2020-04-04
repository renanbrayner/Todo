import styled from 'styled-components';
import crossImg from '../../assets/cross.png';
import sendImg from '../../assets/send.png';

export const Container = styled.div`
    margin-top: 105px;
    width: 1018px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Logo = styled.img`
    margin-bottom: 22px;
    width: 150px;
    height: 150px;
`;

export const CreateTodoInput = styled.form`
    width: 100%;
    
    display: flex;
    flex-direction: column;

    
    label {
        font-size: 25px;
        color: #138A72;
        margin-bottom: 24px;
    }
    
    div {
        width: 100%;
    }

    input {
        color: #138A72;
        margin-bottom: 69px;
        background: none;
        z-index: -2;
    }

    button {
        float: right;
        width: 20px;
        height: 24px;
        margin: 0;
        background: url(${sendImg});
        background-size: cover;
        border: none;
        z-index: 2;
    }
`;

export const TodoList = styled.ul`
    list-style-type: none;
    width: 100%;

    li {
        height: 90px;
        width: 100%;
        border-bottom: 1px solid #138A72;
        font-size: 25px;
        line-height: 30px;
        color: #138A72;

        display: flex;
        align-items: center;
        justify-content: space-between;

        button {
            width: 28px;
            height: 25px;
            background: url(${crossImg});
            background-size: cover;
            border: none;

            :active {
                -webkit-transform: scaleX(-1);
                transform: scaleX(-1);
            }
        }
    }
`