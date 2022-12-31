import React, { useEffect, useState } from 'react';
import { useForm } from '../hooks/useForm';
import { Message } from './Message';

export const FormWithCustomHook = () => {

    const {  username, email, password , onInputChange } = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const { username, email, password } = formState;


    return (
        <>
            <h1>Form With Custom Hook</h1>
            <hr />
            <input type="text"
                className='form-control'
                placeholder='Username'
                name='username'
                value={username}
                onChange={onInputChange}
            />
            <input type="email"
                className='form-control mt-2'
                placeholder='mail@sdt.com'
                name='email'
                value={email}
                onChange={onInputChange}
            />
            <input type="password"
                className='form-control mt-2'
                placeholder='Password'
                name='password'
                value={password}
                onChange={onInputChange}
            />
            {username == 'strider2' && <Message />}
        </>
    );
};
