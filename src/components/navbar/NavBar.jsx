import React from 'react'
import { Link as LinkRouter } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {

    return (

        <div className='nav_bar'>
            <p>Logo</p>
            <div className="nav_container">
                <ul className='nav'>
                    <li><LinkRouter to='/' className='link_router'>Home</LinkRouter></li>
                    <li><LinkRouter to='listproducts' className='link_router'>Produtos</LinkRouter></li>
                    <li><LinkRouter to='' className='link_router'>Clientes</LinkRouter></li>
                    <li><LinkRouter to='' className='link_router'>Pedidos</LinkRouter></li>
                </ul>
                <ul className='nav'>
                    <li><LinkRouter to='' className='link_router'>Castrar</LinkRouter></li>
                    <li><LinkRouter to='' className='link_router'>Entrar</LinkRouter></li>
                </ul>
            </div>
        </div>

    );

};

export default NavBar;