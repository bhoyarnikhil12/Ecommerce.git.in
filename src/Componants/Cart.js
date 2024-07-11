import React from 'react'
import { useCart } from 'react-use-cart'
const Cart = () => {
   const {removeItem,items, updateItemQuantity,totalItems,totalUniqueItems,cartTotal} = useCart();
   
  return (
    <>
    <div className="container">
    <h1>Cart</h1>  
    <table className='table table-strip hover'>
      <tr>
   <th>ID</th>
   <th>Image</th>
   <th>Name</th>
   <th>Price</th>
   <th>Color</th>
   <th>Actions</th>
     </tr>
     {
      items.map((cval) => {
        return(
          <tr>
          <td>{cval.id}</td>
          <td><img src={cval.cover} height={'100'} width={'100'} alt='product-img' /></td>
          <td>{cval.name}</td>
          <td>{cval.price}</td>
          <td>{cval.color}</td>
          <td><button onClick={() =>updateItemQuantity(cval.id,cval.quantity + 1)}>+</button></td>
          <td>{cval.quantity}</td>
          <td><button onClick={() =>updateItemQuantity(cval.id,cval.quantity - 1)}>-</button></td>
          <td><button className='btn btn-danger text-dark' onClick={() =>removeItem(cval.id)}>Remove</button></td>
          </tr>
        );
      })
     }
     <h3>Total = {cartTotal}</h3>
    </table>
    </div>    
    
    </>
  )
}

export default Cart
