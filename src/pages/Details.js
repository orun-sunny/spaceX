import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../Store/SpaceSlice';

const Details = () => {
    const dispatch= useDispatch();
        const products = useSelector((state) => state.space);
        const handleRemove = (productId) => {
            dispatch(remove(productId));
        };
    return (
        <div className='productsWrapper'>

            {
              products.map((product) =>(
                  <div key={product.Id} className='DetailsCard'>
                      <img src={product.links.mission_patch} alt="" />
                     <h4>{product.mission_name}</h4>
                    <h5>{product.launch_year}</h5>                   
                     <h5>{product.details}</h5>
                     <button onClick={() => handleRemove(product)} className="btn">
                       Done
                    </button>

                  </div>
              ))  
            }

               
        </div>
    );
};

export default Details;



// import { getNodeText } from '@testing-library/react';
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { remove } from '../Store/DetailsSlice';

// const Cart = () => {
//     const dispatch = useDispatch();
//     const products = useSelector((state) => state.cart);
//     const handleRemove = (productId) => {
//         dispatch(remove(productId));
//     };

//     return (
//         <div>
//             <h3>Cart</h3>
//             <div className="cartWrapper">
//                 {products.map((product) => (
//                     <div key={product.flight_number} className="cartCard">
//                     <img src={product.links.mission_patch} alt="" />
//                     <h4>{product.mission_name}</h4>
//                     <h5>{product.launch_year}</h5>
//                     <h5>{product.details}</h5>
//                         <button
//                             className="btn"
//                             onClick={() => handleRemove(product.flight_number)}
//                         >
//                             Remove
//                         </button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Cart;
