import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
    padding: 0 61px;

    background-color: #fff;
    flex: 1;
    align-items: center;
    justify-content: space-around;
`;

export const Logo = styled.Image`
    width: 140px;
    height: 140px;
    margin-top: 90px;
`;

export const LinkEditor = styled.Text`
    margin-left: auto;
    font-family: montserrat-alternates-regular;
    font-size: 15px;
    text-decoration: underline;
    color: #138A72;
`;

export const Form = styled.View`
    width: 100%;
    background-color: #fff;
`;

export const Label = styled.Text`
    margin-top: 30px;
    font-family: montserrat-alternates-regular;
    font-size: 18px;
    color: #138A72;
`;

export const Input = styled.TextInput`
    width: 100%;
    border-bottom-color: #138A72;
    border-bottom-width: 1px;
    font-family: montserrat-alternates-regular;
    font-size: 15px;
    color: #138A72;
`;

export const Link = styled.TouchableOpacity`
    width: 100%;
`;

export const LinkText = styled.Text`
    margin-top: 28px;
    margin-bottom: 28px;
    font-family: montserrat-alternates-regular;
    font-size: 15px;
    text-decoration: underline;
    color: #138A72;
`;

export const Button = styled.TouchableOpacity`
    width: 100%;
    height: 57px;
    background-color: #138A72;
    border-radius: 100px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    font-family: montserrat-alternates-regular;
    font-weight: bold;
    font-size: 22px;
    color: #FFF; 
`;