import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import './style.css'
import { NavLink } from 'react-router-dom';
import { useCart } from 'react-use-cart';
const ProductCard = (props) => {
  const {addItem} = useCart();
  return (
   <>
   <div className='col-md-4'>
    <Card className="product-Card" style={{width: '18rem'}}>
      <Card.Img variant="top" src={props.cover} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        Our product is on reasonable price Now sales price live and very good quality with guarrantey in our product.
        </Card.Text>
        
         <NavLink to={`/productinfo/${props.id}`}><Button variant="success">know More</Button></NavLink> <br/> <br/>
         <Button variant="primary" onClick={() =>addItem(props.item)}>Add to Cart</Button>
      </Card.Body>
    </Card>
    </div>
   </>
  )
}
export default ProductCard
