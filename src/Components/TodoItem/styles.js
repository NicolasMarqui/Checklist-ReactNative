import styled from 'styled-components';

export const Wrapper = styled.View`
    flex: 1;
    margin: 5px 0;
    flex-direction: row;
`

export const TitleArea = styled.View`
    flex-direction: column;
    flex: 1;
`

export const Title = styled.Text`
    font-size: 20px;
    font-weight: 400;
    text-decoration-color: #68C946;
    text-decoration: ${props => props.risk ? 'line-through' : ''};
`

export const Date = styled.Text`
    font-size: 10px;
    font-weight: 400;
`

export const CheckMe = styled.TouchableOpacity`
`
export const DeleteMe = styled.TouchableOpacity``