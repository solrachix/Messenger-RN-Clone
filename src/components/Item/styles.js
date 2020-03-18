import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    padding: 15px;
    height: 80px;
    align-items: center;
    margin-left: 0px;
`;

export const Body = styled.View`
    margin-left:20px;
    height: 80px;
    width: 100%;

    justify-content: center;

    border-bottom-color: ${props => props.theme.colors.text};    
    border-bottom-width: 0.3px;
`;

export const TitleContainer = styled.View`
    margin-bottom: 5px;
    width: 82%;
    max-height: 20px;
    
    align-items: baseline;
    justify-content: space-between;
    flex-flow: column wrap;
    align-content: space-between;
    
    /* background: rgba(255, 200, 0, 0.8); */
    padding-right: 15px;
`;

export const FirstTitle = styled.Text`
    color: ${props => props.theme.colors.text};
    font-weight: bold;
    max-width: 80%;
`;

export const SecundTitle = styled.Text`
    color: ${props => props.theme.colors.text};
    font-style: italic;
`;

export const Spotlight = styled.Text`
    min-width: 25px;
    width: 25px;
    max-width: 40px;
    height: 25px;
    padding: 0px;
    padding-left: 3px;
    padding-right: 3px;

    background: ${props => props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.primary};
    border-radius: 20px;

    color: ${props => props.theme.colors.secundary};
    font-weight: bold;
    text-align: center;
    line-height: 25px;
`;


export const Icon = styled.View`
    padding-right: 3px;
`;
