import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    width: 100%;
    height: 100%;
    
    justify-content: center;
    align-content: center;
    align-items: center;

    background-color: transparent;
`;

export const Image = styled.Image`
    width: 150px;
    height: 150px;

    margin-bottom: 10px;

    border-radius: 100px;
`;

export const Text = styled.Text`
    font-size: 22px;
    color: ${props => props.theme.colors.text };
    font-weight: bold;
`;
