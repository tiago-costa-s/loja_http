import { Link as LinkRouter } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import './GenericList.css'

export const GenericList = ({ url }) => {
    const { data, loading, error } = useFetch(url);

    return (
        <div>
            <h1> ListProducts</h1>
            {/* <div className='share_control'>
                <ul>
                    <li><LinkRouter to='/registerproducts'>Cadastrar produto</LinkRouter></li>
                </ul>
            </div> */}
            {error && <p>{error}</p>}
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
    )

};
