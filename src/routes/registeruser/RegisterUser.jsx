import React, { useState } from 'react'
import './RegisterUser.css'
import { useFetch } from '../../hooks/useFetch';

const RegisterUser = () => {
    const [name, setName] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPasswrd] = useState('');

    const url = 'http://localhost:3000/users';
    const { data, loading, error } = useFetch(url);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            code: generatedCodeUser(),
            name,
            login,
            password,
            confirmPassword
        }

        console.log(user)

        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        console.log(res)
    };

    const generatedCodeUser = () => {
        return Math.floor(100000 + Math.random() * 900000)
    };

    return (
        <div className='register_user'>
            <form onSubmit={handleSubmit}>
                <div className="control_input">
                    <label>Nome</label>
                    <input
                        type="text"
                        placeholder='Informe o seu nome'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="control_input">
                    <label >Login</label>
                    <input
                        type="text"
                        placeholder='Informe um login'
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </div>
                <div className="control_input">
                    <label>Senha</label>
                    <input
                        type="password"
                        placeholder='informe uma senha'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="control_input">
                    <label>Confirmar a Senha</label>
                    <input
                        type="password"
                        placeholder='Repita a senha'
                        onChange={(e) => setConfirmPasswrd(e.target.value)}
                    />
                </div>
                <div className="control_input">
                    <input
                        type="submit"
                        value='Cadatrar'
                    />
                </div>
            </form>
        </div>
    )

};

export default RegisterUser;