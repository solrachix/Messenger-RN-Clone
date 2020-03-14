import styled from 'styled-components/native';

export const Avatar = styled.Image`
    height: 54px;
    width: 54px;
    border-radius: 27px;
    position: absolute;
    margin-left: 8px;
    box-shadow: 2px 2px 2px ${props => props.theme.colors.text}
`;
