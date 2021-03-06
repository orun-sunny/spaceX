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
    //  const items = useSelector((state) => state.space);
    const handleDate = (event) =>{
        const searchText = event.target.value;
        const matchedProducts =Products.filter(product => product.launch_date_utctoLowerCase().includes(searchText.toLowerCase()));
        // console.log(event.target.value);
        // setDisplayProducts(matchedProducts);
        // console.log(matchedProducts.length);
    }
    
    return (
        <>
        <div className="date">
                <input
                onChange={()=> handleDate }
                
                type="text"
                 placeholder="date" />
                 {/* <button className="btn-style" type="submit"><i className="fa fa-search"></i></button> */}

            </div>
            



            {/* <div className="search-bar">
                <form className="form-color" onSubmit={submitHandler}>
                <input type="text" value={term } placeholder= "rocket name" onChange={(e)=>setTerm(e.target.value) }/>
                <button className="btn-style" type="submit"><i className="fa fa-search"></i></button>
                </form>

            </div> */}
            <div>
                <Link className="navLink" to="/">
                    Home
                </Link>
                <Link className="navLink" to="/Details">
                    Details
                </Link>
                 {/* <span className="cartCount">Cart items: {space.length}</span>  */}
            </div>
            
      
        </>
        
    );
};

export default Navbar;