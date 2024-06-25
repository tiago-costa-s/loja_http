import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import './ListProducts.css'
import { Link as LinkRouter } from 'react-router-dom';

const ListProducts = () => {
    const url = 'http://localhost:3000/products';
    const { data, loading, error } = useFetch(url);

    return (
        <div className='list_products'>
            <h1> ListProducts</h1>
            <div>
                <ul>
                    <li><LinkRouter to='/registerproducts'>Cadastrar produto</LinkRouter></li>
                </ul>
            </div>          
            {loading && <p>Carregando dados...</p>}
            {!loading &&
                <table className='table_products'>
                    <thead className='table_header'>
                        <tr>
                            <th className='th_code'>Codigo</th>
                            <th className='th_product_name'>Produto</th>
                            <th className='th_manufacturer'>Fabricante</th>
                            <th className='th_discount'>Desconto</th>
                            <th className='th_value'>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((product) => (
                            <tr key={product.id}>
                                <td className='th_code'>{product.codeProduct}</td>
                                <td className='th_product_name'>{product.name}</td>
                                <td className='th_manufacturer'>{product.manufacturer}</td>
                                <td className='th_discount'>{product.discount}%</td>
                                <td className='th_value'>R$ {product.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    );

};

export default ListProducts;