import React from 'react';
import { View } from 'react-native';
import { Wrapper, Title, TitleArea, Date, CheckMe, DeleteMe} from './styles';
import { Feather, AntDesign, MaterialIcons} from '@expo/vector-icons';

const TodoItem = ({ todo, changeTodo, deleteTodo}) => {

    const { title, date, isCompleted } = todo;

    return (
        <Wrapper elevation={10}>
            <TitleArea>
                <Title risk={isCompleted}>
                    { title }
                </Title>
                <Date>
                    { date }
                </Date>
            </TitleArea>

            <DeleteMe onPress={deleteTodo}>
                <MaterialIcons name="delete" size={24} color="red" />
            </DeleteMe>
            <CheckMe onPress={changeTodo}>
                {
                    isCompleted ? <AntDesign name="checksquare" size={24} color="black" /> :
                    <Feather name="square" size={24} color="black" />

                }
                
            </CheckMe>

        </Wrapper>
    );
}

export default TodoItem;