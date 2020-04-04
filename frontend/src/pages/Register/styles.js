import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 176px;
    width: 579px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Logo = styled.img`
    margin-bottom: 22px;
    width: 200px;
    height: 200px;
`;

export const Form = styled.form`
    width: 100%;
    
    display: flex;
    flex-direction: column;

    label {
        font-size: 24px;
        color: #138A72;
        margin-bottom: 10px;
    }

    input {
        color: #138A72;
    }

    .link {
        color: #138A72;
        font-size: 20px;
        margin: 6px 0 38px 0;
        text-decoration: underline; 
    }

    button {
        height: 57px;
        background: #138A72;
        border: none;
        border-radius: 100px;

        color: #ffffff;
        font-weight: bold;
        font-size: 22px;
        transition: opacity 0.2s ease-in-out;

        :hover {
            opacity: 0.7;
        }
    }
`;