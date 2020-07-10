import React, { useState, useEffect } from 'react';
import { Wrapper, TitleArea, FormArea, Input, LoginButton} from './styles';
import { Title, TitleSmall, TitleLogin} from '../../GlobalStyles';
import AsyncStorage from '@react-native-community/async-storage';
import { ToastAndroid } from 'react-native';

const Login = ({ navigation }) => {

    const [ usuario , setUsuario ] = useState('');
    const [ senha , setSenha ] = useState('');
    const [ isLoading, setIsLoading ] = useState(true)

    useEffect(() => {
        checkIfHasUser();
    }, [])

    const checkIfHasUser = async () => {
        await AsyncStorage.getItem('user')
            .then(user => {
                if(user){
                    navigation.replace('Home')
                }

                setIsLoading(false)
            })
    }

    const handleSubmit = async () => {

        if(!usuario || !senha){
            ToastAndroid.showWithGravity("Insira todos os campos :/", ToastAndroid.LONG, ToastAndroid.CENTER);
            return false
        };

        setIsLoading(true);

        const currentUser = {
            usuario,
            senha
        }

        await AsyncStorage.setItem('user', JSON.stringify(currentUser))
            .then(data => {
                setIsLoading(false)
                navigation.replace('Home')
            })

        return false;
    }

    return(
        <Wrapper>
            <TitleArea>
                <Title>
                    Checklist
                </Title>
                <TitleSmall>
                    Trabalho José Willian
                </TitleSmall>
            </TitleArea>

            <FormArea>
               <Input 
                    placeholder="Usuário"
                    onChangeText={(usuario) => setUsuario(usuario)}
                    value={usuario}
               /> 

                <Input 
                    placeholder="Senha"
                    onChangeText={(senha) => setSenha(senha)}
                    value={senha}
                    secureTextEntry={true}
                />

                <LoginButton onPress={handleSubmit}>
                    <TitleLogin>
                        Login
                    </TitleLogin>
                </LoginButton>
            </FormArea>

        </Wrapper>
    )
}

export default Login