import React, { useEffect, useState } from 'react';
import { ToastAndroid, Modal} from 'react-native';
import { Wrapper, AreaTitle, Title, AreaAll, Detail, AndamentoWrapper, AddNewWrapper, AddNew, ModalWrapper, Input, SaveButton, CloseModal, LeftTitle, Logout, DetailTitle} from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { FontAwesome, AntDesign} from '@expo/vector-icons';

import Todo from '../../Components/Todo';
import TodoItem from '../../Components/TodoItem';
import { add } from 'react-native-reanimated';

const Home = ({ navigation }) => {

    function guidGenerator() {
        var S4 = function() {
           return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }

    const [ currentUser , setCurrentUser ] = useState('');
    const [ allTodos , setAllTodos ] = useState([]);
    const [ todosLoading , setTodosLoading ] = useState(true);
    const [ isModalOpen , setIsModalOpen ] = useState(false);
    const [ newTodoValue, setNewTodoValue ] = useState('');
    
    useEffect(() => {
        getUserInfo();
        getAllTodos();
    }, [])

    const getUserInfo = async () => {
        await AsyncStorage.getItem('user')
            .then( (user) => {
                const { usuario } = JSON.parse(user);
                setCurrentUser(usuario);
            })
    }

    const getAllTodos = async () => {
        await AsyncStorage.getItem('todos')
            .then(todo => {
                setAllTodos(JSON.parse(todo))
                setTodosLoading(false);
            })
    }

    const changeTodos = async (id, name) => {
        const currArray = allTodos.map(t => {
            if(t.id === id){
                t.isCompleted = !t.isCompleted;
            }

            return t;
        })

        await AsyncStorage.setItem('todos', JSON.stringify(currArray))

        setAllTodos(currArray)

        ToastAndroid.showWithGravity(`${name} alterado :)`, ToastAndroid.SHORT, ToastAndroid.CENTER)
    }

    const deleteTodos = async (id, name) => {
        const currArrayToBeDeleted = allTodos.filter(t => t.id !== id)

        await AsyncStorage.setItem('todos', JSON.stringify(currArrayToBeDeleted))

        setAllTodos(currArrayToBeDeleted)

        ToastAndroid.showWithGravity(`${name} removido :(`, ToastAndroid.SHORT, ToastAndroid.CENTER)
    }

    const saveNewTodo = async () => {
        if(newTodoValue !== ''){
            const newTodo = {
                id: guidGenerator(),
                title: newTodoValue,
                date: new Date().getFullYear(),
                isCompleted: false,
                belongsTo: currentUser,
            }

            const adding = [...allTodos, newTodo];
            
            setAllTodos(adding);
            
            await AsyncStorage.setItem('todos', JSON.stringify(adding))
                .then(t => ToastAndroid.showWithGravity(`${newTodo.title} adicionado :)`, ToastAndroid.SHORT, ToastAndroid.CENTER))

            setNewTodoValue('');
            setIsModalOpen(false);
        }else{
            ToastAndroid.showWithGravity('Ops, digite algo :(', ToastAndroid.SHORT, ToastAndroid.CENTER)
        }
    }

    const logoutUser = async () => {
        await AsyncStorage.setItem('user' , '')
            .then(user => {
                navigation.replace('Login');
                setCurrentUser('');
            })
    }

    return (
        <Wrapper>
            <AreaTitle>
                <LeftTitle>
                    <Title>
                        Bem Vindo
                    </Title>
                    <Title bold negative>
                        { currentUser }
                    </Title>  
                </LeftTitle>

                <Logout onPress={logoutUser}>
                    <AntDesign name="logout" size={34} color="black" />
                </Logout>   
            </AreaTitle>

            <AreaAll>

                <Title fontSize="20px">
                    Em andamento
                </Title>

                <DetailTitle></DetailTitle>

                <AndamentoWrapper>
                    <Todo>
                        {
                            !todosLoading ? allTodos && allTodos.length > 0 ?

                            allTodos.filter(all => all.belongsTo === currentUser).map(t => (
                                <TodoItem 
                                    key={t.id} 
                                    todo={t} 
                                    changeTodo={() => changeTodos(t.id, t.title)} 
                                    deleteTodo={() => deleteTodos(t.id, t.title)}
                                />
                            )) :

                            <>
                                <Title fontSize="15px" bold>
                                    Você não possui nada a fazer
                                </Title>
                            </> : <Title>
                                Carregando
                            </Title>
                        }
                    </Todo>
                </AndamentoWrapper>

            </AreaAll>

            <AddNewWrapper>
                <AddNew onPress={() => setIsModalOpen(true)}>
                    <FontAwesome name="plus-circle" size={64} color="#68C946" />
                </AddNew>
            </AddNewWrapper>

            <Modal transparent={false} visible={isModalOpen} animated={true}>
                <ModalWrapper>

                    <CloseModal onPress={() => setIsModalOpen(false)}>
                        <AntDesign name="closecircleo" size={44} color="red" />
                    </CloseModal>

                    <Title fontSize="40px">
                        Adicionar novo
                    </Title>
                    <Title bold negative>
                        Item
                    </Title> 
                    <Input placeholder="Novo Item" defaultValue={newTodoValue} onChangeText={text => setNewTodoValue(text)}/>

                    <SaveButton onPress={saveNewTodo}>
                        <Title bold color="white">
                            Adicionar
                        </Title>
                    </SaveButton>
                </ModalWrapper>
            </Modal>
        </Wrapper>
    );
}

export default Home;
