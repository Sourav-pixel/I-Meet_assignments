import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';
import Footer from './Footer';

// Create a new context for managing the state


const ProductsCard = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});

  useEffect(() => {
    axios
      .get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products);
        setCartItems(
          response.data.products.reduce((items, product) => {
            items[product.id] = 1; // Start the quantity from 1 for each product
            return items;
          }, {})
        );
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const getImageUrl = images => {
    const thumbnailImage = images.find(image =>
      image.includes('thumbnail.jpg')
    );
    if (thumbnailImage) {
      return thumbnailImage;
    }
    return images[0]; // If thumbnail is not found, use the first image in the array
  };

  const updateCartItem = (productId, quantity) => {
    setCartItems(prevState => ({
      ...prevState,
      [productId]: quantity
    }));
  };

  const addToCart = (productId, currentQuantity) => {
    const newQuantity = (currentQuantity || 0) + 1;
    updateCartItem(productId, newQuantity);
  };

  const removeFromCart = (productId, currentQuantity) => {
    const newQuantity = Math.max((currentQuantity || 0) - 1, 0);
    updateCartItem(productId, newQuantity);
  };

  const getProductPrice = (productId) => {
    const product = products.find(p => p.id === productId);
    if (product) {
      return product.price;
    }
    return 0;
  };

  const calculateCartItemPrice = (productId, quantity) => {
    const productPrice = getProductPrice(productId);
    return productPrice * quantity;
  };

  return (

      <>
        <Navbar />
        <div className="flex justify-center items-center mt-6">
          <div className="grid grid-cols-3 gap-4">
            {products.map(product => (
              <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg">
                <img src={getImageUrl(product.images)} alt={product.name} className="w-full" />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{product.title}</div>
                  <p className="text-gray-700 text-base">{product.description}</p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                    {product.category}
                  </span>


                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                    {calculateCartItemPrice(product.id, cartItems[product.id] || 0)}$
                  </span>
                  <Link to={`/Login`}>
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded-full">Buy</button>
                  </Link>
                  <div className=" mt-4">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                      onClick={() => addToCart(product.id, cartItems[product.id])}
                    >
                      +
                    </button>
                    <span className="text-gray-700 mx-2">{cartItems[product.id] || 0}</span>
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                      onClick={() => removeFromCart(product.id, cartItems[product.id])}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </>
 
  );
};
export default ProductsCard