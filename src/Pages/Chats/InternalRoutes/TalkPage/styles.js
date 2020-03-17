import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    width: 100%;
    height: 100%;

    background: ${props => props.theme.colors.secundary};

    position: relative;
    left: 0px;
    bottom: 0px;
`;

export const FlatList = styled.FlatList`
    width: 100%;
    height: 100%;
`;