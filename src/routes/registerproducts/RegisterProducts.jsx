import React, { useState } from 'react'
import './RegisterProducts.css'
import ListProducts from '../listproducts/ListProducts';
import { GenericList } from './../../components/genericlist/GenericList';

const RegisterProducts = () => {
    const [name, setName] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [discount, setDiscount] = useState('')
    const [price, setPrice] = useState('');
    const [loading, setLoading] = useState(false);

    const url = 'http://localhost:3000/products';

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !manufacturer || !discount || !price) return

        setLoading(true);

        const product = {
            codeProduct: generatedCodeProduct(),
            name,
            manufacturer,
            discount,
            price
        };

        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        setLoading(false);
        console.log(res);
    };

    // gera codigo do produto
    const generatedCodeProduct = () => {
        return Math.floor(100000 + Math.random() * 900000)
    };

    return (
        <div className='register_products'>
            <h1>RegisterProducts</h1>
            <div className="form_container">
                <form onSubmit={handleSubmit}>
                    <div className="control_input">
                        <label>Nome</label>
                        <input
                            type='text'
                            value={name}
                            placeholder=''
                            onChange={(e) => { setName(e.target.value) }}
                        />
                    </div>
                    <div className="control_input">
                        <label>Fabricante</label>
                        <input
                            type='text'
                            value={manufacturer}
                            placeholder=''
                            onChange={(e) => { setManufacturer(e.target.value) }}
                        />
                    </div>
                    <div className="control_input">
                        <label>Desconto</label>
                        <input
                            type='number'
                            value={discount}
                            min={0}
                            placeholder=''
                            onChange={(e) => { setDiscount(e.target.value) }}
                        />
                        <div className="control_input">
                            <label>Preço</label>
                            <input
                                type='number'
                                value={price}
                                min={0}
                                placeholder=''
                                onChange={(e) => { setPrice(e.target.value) }}
                            />
                        </div>
                    </div>
                    <div className="control_input">
                        <input
                            type='submit'
                            value='Cadastrar'
                        />
                    </div>
                </form>
            </div>
            {loading && <p>Inserindo produto...</p>}
            {/* {!loading && <ListProducts />} */}
            <GenericList url={url} />
        </div>
    );

};

export default RegisterProducts;