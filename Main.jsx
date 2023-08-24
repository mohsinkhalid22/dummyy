import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct';

const Main = () => {
    const url = 'https://dummyjson.com/products';
    const [products,setProducts] = useState([]);
    const getData = async() => {
        const data = await fetch(url);
        const response = await data.json();
        // console.log(response);
        setProducts(response.products);
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <>
        <div className="row">
            {products?.map((prod) => {
                return <SingleProduct key={prod.id} {...prod}/>
            })}
        </div>
        </>
    )
}

export default Main