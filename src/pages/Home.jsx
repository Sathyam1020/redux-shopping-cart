import React, { useEffect, useState } from 'react'
import Product from '../components/Product';
import Spinner from "../components/Spinner";
const Home = () => {

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  const API_URL = "https://fakestoreapi.com/products";

  const fetchProductData = async() => {
    setLoading(true); 
    
    try{
      const res = await fetch(API_URL);
      const data = await res.json();

      setPosts(data);

    }
    catch(err){
      console.log("Error came ji ");
      setPosts([]);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, [])

  return (
    <div>
      {
        loading ? (<Spinner/>) : (
          posts.length > 0 ? 
          (
            <div className='grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]'>
              {
                posts.map((post) => {
                  return (
                    <Product key={post.id} post={post}/>
                  )
                })
              }
            </div>
          ) : (
            <div className='flex items-center justify-center'>
              <p>No Data Found</p>
            </div>
            
          )
        )
      }
    </div>
  )
}

export default Home;
