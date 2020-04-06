import styled from 'styled-components/native';
import { TouchableOpacity, FlatList } from 'react-native';

export const Container = styled.View`
    padding: 0 52px;

    background-color: #fff;
    flex: 1;
    align-items: center;
`;

export const Logo = styled.Image`
    margin-top: 68px;
    width: 80px;
    height: 80px;
`;

export const Form = styled.View`
    width: 100%;
`;

export const Label = styled.Text`
    margin-top: 30px;
    font-family: montserrat-alternates-regular;
    font-size: 20px;
    color: #138A72;
`;

export const Input = styled.TextInput`
    width: 100%;
    margin-bottom: 74px;
    border-bottom-color: #138A72;
    border-bottom-width: 1px;
    font-family: montserrat-alternates-regular;
    font-size: 15px;
    color: #138A72;
`;

export const SendButton = styled.TouchableOpacity`
    
`;

export const SendButtonImg = styled.Image`
    height: 19px;
    width: 15px;
    margin-left: auto;
    
`;

export const TodoList = styled.FlatList`
    width: 100%;
    margin-bottom: 8px;
`;

export const TodoItem = styled.View`
    height: 65px;
    width: 100%;
    border-bottom-color: #138A72;
    border-bottom-width: 1px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TodoText = styled.Text`
    font-family: montserrat-alternates-regular;
    font-size: 19px;
    color: #138A72;
`;

export const TodoDeleteButton = styled.TouchableOpacity`
    
`;

export const DeleteButtonImg = styled.Image`
    height: 18px;
    width: 18px;
`;