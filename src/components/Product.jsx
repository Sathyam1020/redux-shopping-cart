import React from 'react'

const Product = ({post}) => {
  const selected = true; 
  return (
    <div>

      <div>
        <p>{post.title}</p>
      </div>

      <div>
        <p>{post.description}</p>
      </div>

      <div>
        <img src={`${post.image}`} alt='pic'/>
      </div>

      <div>
        <p>{post.price}</p>
      </div>

      <button>
        {
          selected ? (<p>Remove Item</p>) : (<p>Add To Cart</p>)
        }
      </button>

    </div>
  )
}

export default Product;