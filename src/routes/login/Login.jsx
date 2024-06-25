import { useState } from 'react';
import './Login.css'
import { Link as LinkRouter } from 'react-router-dom';

const Login = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='login'>
            <form>
                <h1>Login</h1>
                <div className="control_input">
                    <label htmlFor=""></label>
                    <input
                        type="text"
                        placeholder='Login'
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </div>
                <div className="control_input">
                    <label htmlFor=""></label>
                    <input
                        type="text"
                        placeholder='Senha'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="control_input">
                    <label htmlFor=""></label>
                    <input type="submit" />
                </div>
            </form>
            <LinkRouter to='registeruser'>Cadastre-se</LinkRouter>

        </div >
    )

};

export default Login;