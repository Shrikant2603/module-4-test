import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Home.css';
import SingleProduct from './singleproduct/SingleProduct';

const Home = (props) => {
  const [content, setContent] = useState([])
  const fetchTrending = async () => {
    const { data } = await axios.get(
      "https://dummyjson.com/products"
    );
    setContent(data.products);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchTrending();
    // eslint-disable-next-line
  }, []);
  
  return (
    <div>
        <h1 className='heading'>All Items</h1>
        <div className="homepage">
        {content &&
          content.map((c) => (
            <SingleProduct
              prop={props}
              key={c.id}
              id={c.id}
              image={c.images[0]}
              title={c.title}
              price={c.price}
              addToCartHandler={props.addToCartHandler}
            />
          ))}
      </div>
    </div>
  )
}

export default Home