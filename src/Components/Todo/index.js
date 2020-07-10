import React, { Children } from 'react';
import { Wrapper } from './styles';

const Todo = ({ children }) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

export default Todo;