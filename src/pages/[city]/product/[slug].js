import Footer from '@/components/Footer';
import Header from '@/components/Header'
import ProductCard from '@/components/ProductCard';
import Head from 'next/head';
import { parseCookies, setCookie } from 'nookies';
import React, { useState } from 'react'

const Product = ({ city, product, categoryProducts, referror_page }) => {
  const [addToCartLoaderVisibility, setAddToCartLoaderVisibility] = useState(false);
  const [productQuantity, setProductQuantity] = useState(1);
  const shortDescription = product.products[0].short_description.replaceAll(",", " \n ");

  function handleCart() {
    setAddToCartLoaderVisibility(true);
    const cookies = parseCookies();
    const cart = cookies.cart ? JSON.parse(cookies.cart) : [];
    const { name, id, sale_price, images } = product.products[0] || {};
    const existingCartItemIndex = cart.findIndex(item => item.name === name);

    const total = sale_price * productQuantity;

    setTimeout(() => {
      if (existingCartItemIndex !== -1) {
        const updatedCart = cart.map((item, index) =>
          index === existingCartItemIndex ? { ...item, quantity: item.quantity + productQuantity, total: item.total + total } : item
        );
        setCookie(null, 'cart', JSON.stringify(updatedCart), { path: '/' });
      } else {
        const newCartItem = { name, id, quantity: productQuantity, total, images };
        setCookie(null, 'cart', JSON.stringify([...cart, newCartItem]), { path: '/' });
      }
      setAddToCartLoaderVisibility(false);
    }, 3000);
  }

  return (
    <>
      <Head>
        <title>{product.products[0].name} | Gulfflora | Same-Day Flowers Delivery</title>
      </Head>
      <div className="main">
        <Header city={city} />
        <div className="body">
          <div className="product">
            <div className="product-container">
              <div className="col-1">
                <img src={product.products[0].images[0].src} alt="" />
              </div>
              <div className="col-2">
                <div className="product-header">
                  <p className="category"></p>
                  <h1 className="title">{product.products[0].name}</h1>
                  <div className="product-description" dangerouslySetInnerHTML={{ __html: product.products[0].description }} />
                  <div className="product-specs">
                    <span>Product Specifications</span>
                    <div dangerouslySetInnerHTML={{ __html: shortDescription }}></div>
                  </div>
                  <p className="pricing"><span className="mrp">{product.products[0].regular_price}ر.س</span><span className="price">{product.products[0].sale_price}ر.س</span></p>
                </div>
                <div className="cart-container">
                  <div className="quantity-container">
                    <svg viewBox="0 0 11 2" fill="none"
                      xmlns="http://www.w3.org/2000/svg" onClick={() => productQuantity > 1 ? setProductQuantity(productQuantity - 1) : productQuantity}>
                      <path d="M0 1H11" stroke="#486857" strokeWidth="2" />
                    </svg>
                    <input type="number" name="" value={productQuantity} readOnly />
                    <svg viewBox="0 0 15 16" fill="none"
                      xmlns="http://www.w3.org/2000/svg" onClick={() => setProductQuantity(productQuantity + 1)}>
                      <path d="M0 8H15" stroke="#486857" strokeWidth="2" />
                      <path d="M7.62695 15.5L7.62695 0.5" stroke="#486857" strokeWidth="2" />
                    </svg>

                  </div>
                  <button onClick={handleCart}>{addToCartLoaderVisibility ? <div className="loader"><span></span><span></span><span></span></div> : <p>Add to Cart</p>}</button>
                </div>
                <div className="notice">
                  <p>Order this product before <span>2:00PM</span> to get it delivered by today.</p>
                </div>
              </div>
            </div>
            <div className="similar-products">
              <div className="similar-products-container">
                <h2>People also bought</h2>
                <div className="products">
                  {
                    categoryProducts.products?.map((similarProduct, index) => {
                      return (
                        <ProductCard name={similarProduct.name} slug={similarProduct.slug} image={similarProduct.images[0].src} regular_price={similarProduct.regular_price} sale_price={similarProduct.sale_price} categories={similarProduct.categories} categoryId={referror_page} key={index}></ProductCard>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>

      <style jsx>{`
        .product {
          padding: 50px 0;
          font-family: "Bricolage Grotesque";
      }
      
      .product-container {
          width: 100%;
          max-width: 1200px;
          padding: 0 20px;
          margin: auto;
          display: flex;
          gap: 50px;
          align-items: center;
      }
      
      @media screen and (max-width: 767px) {
      .product-container {
          flex-direction: column;
          gap: 50px;
      }
      }
      
      .product .col-1,
      .product .col-2 {
          width: 50%;
      }
      
      @media screen and (max-width: 767px) {
      .product .col-1,
      .product .col-2 {
          width: 100%;
      }
      }
      
      .product .col-1 img {
          width: 100%;
      }
      
      .product .col-2 {
          display: flex;
          flex-direction: column;
          gap: 40px;
      }
      
      .product-header {
          display: flex;
          flex-direction: column;
          gap: 20px;
      }
      
      .category {
          font-size: 14px;
          color: #5C7F6E;
      }
      
      .title {
          font-weight: 900;
          letter-spacing: -.5px;
      }
      
      .product-description {
          color: #777778;
          font-size: 16px;
          font-weight: 300;
      }
      
      .pricing {
          display: flex;
          gap: 30px;
          margin-top: 5px;
      }
      
      .mrp {
          font-size: 20px;
          color: #21212180;
          text-decoration: line-through;
      }
      
      .price {
          font-size: 20px;
          color: #486857;
      }
      
      .product-specs {
          display: flex;
          flex-direction: column;
          gap: 8px;
          color: #777778;
          font-size: 16px;
          font-weight: 300;
      }

      .product-specs span {
          color: #212121;
          font-size: 16px;
          font-weight: 400;
      }
      
      .product-specs p {
          display: flex;
          align-items: center;
          gap: 10px;
          text-transform: uppercase;
          color: #616161;
      }
      
      .cart-container {
          width: 100%;
          font-family: "Bricolage Grotesque";
      }
      
      .quantity-container {
          width: 100%;
          height: 50px;
          border-top: solid 1px #7EA68D;
          border-left: solid 1px #7EA68D;
          border-right: solid 1px #7EA68D;
          display: flex;
          align-items: center;
          justify-content: space-between;
      }
      
      .quantity-container input {
          width: 50px;
          height: 100%;
          border: none;
          outline: none;
          background-color: transparent;
          color: #5C7F6E;
          font-family: "Bricolage Grotesque";
          font-size: 15px;
      }

      .quantity-container svg {
        width: 50px;
        height: 100%;
        cursor: pointer;
        padding: 20px;
    }
      
      .quantity-container input::-webkit-inner-spin-button,
      .quantity-container input::-webkit-outer-spin-button {
          display: none;
      }
      
      .cart-container button {
          height: 50px;
          width: 100%;
          background-color: #5C7F6E;
          color: #ffffff;
          border: none;
          outline: none;
          font-family: "Bricolage Grotesque";
          font-size: 16px;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
      }

      .cart-container button .loader {
          display: flex;
          gap: 5px;
      }

      .cart-container button .loader span {
          width: 5px;
          height: 5px;
          border-radius: 100%;
          background-color: #FFFFFF;
          animation: cartLoader 1s linear infinite;
      }

      .cart-container button .loader span:nth-child(1) {
          animation-delay: 0s;
      }

      .cart-container button .loader span:nth-child(2) {
          animation-delay: 0.1s;
      }

      .cart-container button .loader span:nth-child(3) {
          animation-delay: 0.2s;
      }

      @keyframes cartLoader {
          0% {
              transform: translateY(0);
          }
          50% {
              transform: translateY(-5px);
          }
          100% {
              transform: translateY(0);
          }
      }
      
      .notice p {
          text-align: left;
          color: #5C7F6E;
          font-weight: 600;
      }
      
      .notice p span {
          color: #00584B;
      }
      
      .similar-products {
          width: 100%;
          padding: 100px 0;
          display: flex;
          flex-direction: column;
      }
      
      .similar-products-container {
          width: 100%;
          max-width: 1200px;
          padding: 0 20px;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 40px;
      }
      
      .similar-products-container h2 {
          color: #212121;
      }
      
      .similar-products-container .products {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 10px;
      }

      @media screen and (max-width: 767px) {
        .similar-products-container .products {
          grid-template-columns: repeat(2,1fr);
      }
      }
      
      .similar-products-container .products a {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 20px;
      }
      
      .similar-products-container .product {
          background-color: #ffffff;
          text-decoration: none;
          width: 100%;
      }

      .similar-products-container .product a {
          padding: 20px;
      }
      
      .similar-products-container .product img {
          width: 100%;
          margin: auto;
      }
      
      .similar-products-container .product-details {
          display: flex;
          flex-direction: column;
          gap: 10px;
      }

      .similar-products-container .product-details h3 {
          color: #313131;
          font-size: 18px;
      }
      
      .similar-products-container .product-details p {
          color: #414141;
          font-weight: 500;
      }
      
      .similar-products-container .product-details .product-price {
          display: flex;
          align-items: center;
          gap: 10px;
      }
      
      .similar-products-container .product-details .product-price .mrp {
          text-decoration: line-through;
          color: #777778;
          font-size: unset;
          font-weight: 400;
      }
      
      .similar-products-container .product-details .product-price .price {
          color: #486857;
          font-size: unset;
          font-weight: 400;
      }
      `}</style>
    </>
  )
}

export async function getServerSideProps(context) {
  const { city } = context.params;
  const { slug } = context.params;
  const { referror_page } = context.query;
  const [productResponse, categoryResponse] = await Promise.all(
    [
      fetch(`https://www.gulfflora.ae/api/products?slug=${slug}`),
      fetch(`https://www.gulfflora.ae/api/products?category=${referror_page}&per_page=8`)
    ]
  )
  const [product, categoryProducts] = await Promise.all(
    [
      productResponse.json(),
      categoryResponse.json()
    ]
  )

  return {
    props: {
      city,
      product,
      categoryProducts,
      referror_page
    }
  }
}

export default Product