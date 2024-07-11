import React from 'react'
import { useParams } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import NewData from '../ProductData';
import { useCart } from 'react-use-cart';
import Button from 'react-bootstrap/esm/Button';
const ProductInfo = (props) => {
 
  const { id } = useParams();
  let NewId = parseInt(id)
  const {addItem} = useCart();
  
 
  return (
    <>
      {<h1 className='text-center my-5'>Product Info</h1>}
      {
        NewData.map((cval) => {
          if (NewId === cval.id) {
            return (
              <>
                <div className="container">

                  <div className="row">

                    <div className='col-md-4'>
                      <img src={cval.cover} height={'400'} width={'300'} alt='product-img' />
                
                    </div>
                    <div className="col-md-8">
                      <h1>Name:{cval.name}</h1>
                      <h3>Price:{cval.price}INR.</h3>
                      <Badge bg="info">Color:{cval.color}</Badge>
                      <p>Description:{cval.description}</p>
                      <Button className='btn btn-dark' onClick={() =>addItem(props.item)}>Add to Cart</Button>
                    </div>
                  </div>
                </div>
              </>

            );

          }
        })
      }


    </>
  )

}
export default ProductInfo
