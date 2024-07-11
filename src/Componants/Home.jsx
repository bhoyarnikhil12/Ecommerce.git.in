import React from 'react'
import ProductCard from './productCard'
import NewData from '../ProductData'
const Home = () => {
  return (
    <>
      <h1 className='text-center my-3 text-info'>Our Products</h1>
      <div className='container'>
        <div className='row'>
          {

            NewData.map((cval, index) => {
              return (
                <ProductCard
                  id = {cval.id}
                  name = {cval.name}
                  cover = {cval.cover}
                  color = {cval.color}
                  items = {cval.items}
                />
              )
            })
          }
        </div>
      </div>
    </>
  )
};

export default Home
