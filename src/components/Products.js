import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { add } from '../Store/DetailsSlice';
// import { fetchProducts } from '../Store/DetailsSlice';
// import { STATUSES } from '../store/productSlice';
const Products = () => {
    //  const dispatch = useDispatch();

     const [products, setProducts] = useState([]);

     useEffect(() => {
    // dispatch(fetchProducts());
        const fetchProducts = async () => {
            const res = await fetch('https://api.spacexdata.com/v3/launches');
            const data = await res.json();
            // console.log(data);
            setProducts(data);
        };
        fetchProducts();
    }, []);

    // const handleAdd = (product) => {
    //     dispatch(add(product));
    // };

    return (
        <div className="productsWrapper">
            {products.map((product) => (
                <div className="card" key={product.flight_number}>
                    <img src={product.links.mission_patch} alt="" />
                    <h4>{product.mission_name}</h4>
                    <h5>{product.launch_year}</h5>
                    <h5>{product.launch_date_local}</h5>
                    {/* <button onClick={() => handleAdd(product)} className="btn">
                        Add to cart
                    </button> */}
                </div>
            ))}
        </div>
    );
};

export default Products;