import styled from 'styled-components';

export const Wrapper = styled.View`
    flex: 1;
`

export const TitleArea = styled.View`
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
`

export const FormArea = styled.View`
    width: 70%;
    justify-content: flex-start;
    align-items: center;
    flex: 2;
    margin: 100px auto 0;
    position: relative;
    z-index: 10;
`

export const Input = styled.TextInput`
    padding: 10px;
    background-color: #fff;
    width: 100%;
    border-radius: 25px;
    margin: 10px 0;
`

export const LoginButton = styled.TouchableOpacity`
    width: 80%;
    margin: 50px auto;
    background-color: #8D0C17;
    border-radius: 25px;
    padding: 10px;
    justify-content: center;
    align-items: center;
`