import styled from 'styled-components/native';
import I from '@expo/vector-icons/Ionicons';
import Item from '$root/components/Item';

export const Container = styled.ScrollView`
    flex: 1;
    background-color: ${props => props.theme.colors.tertiary};
`;

export const BigAvatarContainer = styled.View`
    width: 100%;
    height: 200px;

    justify-content: center;
    align-content: center;
    align-items: center;
`;



export const Ul = styled.View`
    width: 100%;

    flex-direction: column;

    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 0px;

    
    /* border-top-color: ${props => props.theme.colors.quarterly};
    border-top-width: 0.5px;
    border-bottom-color: ${props => props.theme.colors.quarterly};
    border-bottom-width: 0.5px;

    background-color: ${props => props.theme.colors.secundary}; */
`;

export const Li = styled(Item)`
    width: 100%;
    height: 50px;


    /* justify-content: center; */
    align-items: center;
    flex-direction: row;

    margin-left: 0px;
    margin-bottom: 20px;
`;

export const IconContainer = styled.View`
    width: 36px;
    height: 36px;
  
    background-color: ${props => props.theme.colors.primary};
    
    border-radius: 50px;

    justify-content: center;
    align-items: center;
`;

export const Icon = styled(I)`
  color: #fff;
`;

export const Title = styled.Text`
    width: 100%;
    height: 30px;

    color: ${props => props.theme.colors.placeholder};

    font-size: 15px;

    margin-left: 16px;
`;

export const Text = styled.Text`

    color: #fff;

    font-weight: bold;
    font-size: 15px;

    /* margin-left: 16px; */
`;