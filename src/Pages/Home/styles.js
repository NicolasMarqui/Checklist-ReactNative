import styled from 'styled-components';

export const Wrapper = styled.View`
    padding: 50px 20px 10px;
    background-color: #fff;
    flex: 1;
    justify-content: center;
    align-items: center;

` 

export const AreaTitle = styled.View`
    width: 100%;
    flex-direction: row;
`

export const LeftTitle = styled.View`
    flex: 1;
    flex-direction: column;
`

export const Logout = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: flex-end;
    padding-right: 10px;
`

export const Title = styled.Text`
    font-weight: ${props => props.bold ? 700 : 400};
    margin-top: ${props => props.negative ? '-10px' : 0};
    font-size: ${props => props.fontSize ? props.fontSize : '25px'};
    color: ${props => props.color ? props.color : "#000"};
`

export const AreaAll = styled.View`
    flex: 1;
    width: 100%;
    padding: 15px 0;
    margin-top: 50px;
`

export const Detail = styled.View`
    width: 40%;
    background-color: #68C946;
    border-radius: 30px;
    padding: 20px;
`

export const AndamentoWrapper = styled.ScrollView`
    padding: 0px 5px;
    flex: 1;
`

export const AddNewWrapper = styled.View`
    padding: 10px 0;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const AddNew = styled.TouchableOpacity`
    padding: 0px 10px;
    position: absolute;
    bottom: 0;
`

export const ModalWrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    position: relative;
`

export const Input = styled.TextInput`
    width: 50%;
    margin: 40px auto 0;
`

export const SaveButton = styled.TouchableOpacity`
    width: 60%;
    margin: 30px;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: #68C946;
    border-radius: 25px;
`

export const CloseModal = styled.TouchableOpacity`
    position: absolute;
    top: 60px;
    left: 45%;
`

export const DetailTitle = styled.View`
    width: 20%;
    background-color: #68C946;
    height: 6px;
    margin-top: 6px;
`