import styled from 'styled-components/native';
import Icone from "@expo/vector-icons/MaterialCommunityIcons";

export const Container = styled.SafeAreaView`
    position: relative;
    height: 60px;
    /* flex: 1; */
    flex-direction: row;
    justify-content: center;
    align-items: center;

    left: 0px;
    bottom: 0px;
    /* top: 80%; */

    border-top-width: 1px;
    border-color: ${props => props.theme.colors.text};
    /* background-color: ${props => props.theme.colors.Purple}; */
`;

export const Input = styled.TextInput`
    /* flex: 1; */
    /* position: absolute; */
    height: 40px;
    width: 70%;
    border-radius: 7px;
    background-color: ${props => props.theme.colors.tertiary};
    margin-left: 0px;
    /* margin-top: 8px; */
    padding-left: 40px;
    color: ${props => props.theme.colors.text};
`;

export const Button = styled.TouchableOpacity`
    flex: 2;
    justify-content: center;
    align-items: center;
`;

export const Icon = styled(Icone)`
    color: ${ props => props.theme.colors.primary}
`;
