import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Products from './Products';


const Navbar = () => {
    const [term,setTerm] = useState("");
    const submitHandler = (e) =>{
        e.preventDefault();
        console.log(term);
    }
    // const items = useSelector((state) => state.cart);
    const handleSearch = event =>{
        const searchText =event.target.value;
        const matchedProducts = Products.filter(product => product.name.includes(searchText));
        console.log(event.target.value);
        console.log(matchedProducts.length);
    }
    return (
        <>
       
            <div className="search-bar">
                <input
                onChange={handleSearch}
                
                type="text"
                 placeholder="type rocket" />

            </div>



            {/* <div className="search-bar">
                <form className="form-color" onSubmit={submitHandler}>
                <input type="text" value={term } placeholder= "rocket name" onChange="{(e)=>setTerm(e.target.value) }"/>
                <button className="btn-style" type="submit"><i className="fa fa-search"></i></button>
                </form>

            </div> */}
            <div>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/cart">
                    Cart
                </Link>
                 {/* <span className="cartCount">Cart items: {items.length}</span>  */}
            </div>
            
      
        </>
        
    );
};

export default Navbar;