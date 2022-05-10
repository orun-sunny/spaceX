import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Details = () => {
    // const dispatch= useDispatch();
        const products = useSelector((state) => state.Details);
    return (
        <div className='Details-all'>

            {
              products.map((product) =>(
                  <div className='DetailsCard'>
                      <img src={product.links.mission_patch} alt="" />
                     <h4>{product.mission_name}</h4>
                    <h5>{product.launch_year}</h5>                   
                     <h5>{product.details}</h5>

                  </div>
              ))  
            }

                <h3>hiiiiiiiiiiiiiiii</h3>
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
