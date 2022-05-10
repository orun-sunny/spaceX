import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { add } from '../Store/DetailsSlice';
// import { fetchProducts } from '../Store/DetailsSlice';
// import { STATUSES } from '../store/productSlice';
import { add } from '../Store/SpaceSlice';
const Products = () => {
   
     const dispatch = useDispatch();

     const [products, setProducts] = useState([]);

     useEffect(() => {
    // dispatch(fetchProducts());
        const products = async () => {
            const res = await fetch('https://api.spacexdata.com/v3/launches');
            const data = await res.json();
            // console.log(data);
            setProducts(data);
        };
        products();
    }, []);



    const handleAdd = (product) => {
        dispatch(add(product));
    };
    const handleSearch = event =>{
        const searchText = event.target.value;
        const matchedProducts =products.filter(product => product.rocket.rocket_name.includes(searchText.toLowerCase()));
        // console.log(event.target.value);
        console.log(matchedProducts.length);
    }

    return (
        <>
        <div className="search-bar">
                <input
                onChange={handleSearch}
                
                type="text"
                 placeholder="type rocket" />
                 {/* <button className="btn-style" type="submit"><i className="fa fa-search"></i></button> */}

            </div>
        <div className="productsWrapper">
            {products.map((product) => (
                
                <div className="card" key={product.flight_number}>
                    <img src={product.links.mission_patch} alt="" />
                    <h4>{product.mission_name}</h4>
                    <h5>{product.launch_year}</h5>
                    <h5>{product.launch_date_local}</h5>
                    <button onClick={() => handleAdd(product)} className="btn">
                        see details
                    </button>
                </div>
            ))}
        </div>
        </>
    );
};

export default Products;