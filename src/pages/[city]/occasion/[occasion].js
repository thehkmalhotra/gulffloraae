import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Header from '@/components/Header';
import Head from 'next/head';
import Link from 'next/link';

const Occasion = ({ categoryData }) => {
  const router = useRouter();
  const [currentPage, setcurrentPage] = useState(1);
  const [categoryProducts, setCategoryProducts] = useState(categoryData.currentCategoryProducts.products);
  const currentCategoryId = categoryData.currentCategory.id;
  const totalPages = Math.ceil(categoryData.currentCategory.count / 20);
  const progress = currentPage / totalPages * 100;
  const fetchCategoryProducts = async () => {
    const currentCategoryProductsResponse = await fetch(`https://www.gulfflora.ae/api/products?category=${currentCategoryId}&per_page=20&page=${currentPage}&count=true`);
    const currentCategoryProducts = await currentCategoryProductsResponse.json();
    if (currentPage === 1) {
      setCategoryProducts(categoryProducts);
    }
    else {
      setCategoryProducts([...categoryProducts, ...currentCategoryProducts.products]);
    }
  };
  useEffect(() => {
    fetchCategoryProducts();
  }, [currentPage])

  return (
    <>
      <Head>
        <title>{categoryData.currentCategory.category_title} | Gulfflora</title>
      </Head>
      <div className="main">
        <Header  city={ city }></Header>
        <div className="body">
          <div className="category">
            <div className="category-hero">
              <img src={categoryData.currentCategory?.category_image.url} alt="" />
              <div>
                <h1>{categoryData.currentCategory?.name}</h1>
                <p>{categoryData.currentCategory?.description}</p>
              </div>
            </div>
            <div className="product-section">
              <div className="product-container">
                <div className="product-header"></div>
                <div className="products">
                  {categoryProducts?.map((product, index) => {
                    return (
                      <div className="product" key={index}>
                        <Link href={"/" + router.query.city + "/product/" + product.slug} legacyBehavior>
                          <a href={"/" + router.query.city + "/product/" + product.slug}>
                            <div className="header">
                              <h3>{product.name.substring(0, 25) + "..."}</h3>
                            </div>
                            <img src={product.images[0].src} alt="" />
                            <div className="product-details">
                              <p className="product-price"><span className="mrp">{product.regular_price}ر.س</span><span
                                className="price">{product.sale_price}ر.س</span></p>
                              <p>Estimated Delivery: Today</p>
                            </div>
                          </a>
                        </Link>
                        <button>Add to Cart</button>
                      </div>
                    )
                  })}
                </div>
                {currentPage < totalPages ? <div className="show-more">
                  <div className="progress"><div style={{width: `${progress}%`}}></div></div>
                  <button data-current-page={currentPage} onClick={() => setcurrentPage(currentPage + 1)}>Show more Products</button>
                </div> : ""}
              </div>
            </div>
          </div>
        </div>
        <footer></footer>
      </div>

      <style jsx>{`
        .category-container {
          display: flex;
          flex-direction: column;
          gap: 50px;
      }
      
      .category-hero {
          position: relative;
      }
      
      .category-hero img {
          width: 100%;
      }
      
      .category-hero div {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          max-width: 1380px;
          padding: 0 20px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-family: "Bricolage Grotesque";
      }
      
      .category-hero div p {
          width: 60%;
          color: #414141;
      }
      
      @media screen and (max-width: 767px) {
          .category-hero div p {
              width: 100%;
              color: #414141;
          }
      }
      
      .product-section {
          width: 100%;
          padding: 50px 0;
          font-family: "Bricolage Grotesque";
          display: flex;
          flex-direction: column;
          gap: 50px;
      }
      
      .product-container {
          width: 100%;
          max-width: 1380px;
          padding: 0 20px;
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 60px;
      }
      
      .product-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
      }
      
      .product-header p {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #5C7F6E;
          font-size: 15px;
      }
      
      @media screen and (max-width: 767px) {
          .products {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 10px;
          }
      }
      
      @media (min-width: 768px) and (max-width: 1023px) {
          .products {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 10px;
          }
      }
      
      @media screen and (min-width: 1024px) {
          .products {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
              gap: 10px;
          }
      }
      
      .products a {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 20px;
      }
      
      .product {
          background-color: #ffffff;
          text-decoration: none;
          padding: 20px;
          width: 100%;
      }
      
      .product .header {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          width: fit-content;
          margin: auto;
          padding: 30px 0 0 0;
      }
      
      .product .header h3 {
          color: #313131;
          font-size: 20px;
          text-align: center;
      }
      
      .product .header p {
          color: #486857;
          font-size: 14px;
          font-weight: 500;
          text-align: center;
      }
      
      .product img {
          width: 160px;
          margin: auto;
      }
      
      .product-details {
          display: flex;
          flex-direction: column;
          gap: 5px;
      }
      
      .product-details p {
          color: #414141;
          font-weight: 500;
      }
      
      .product-details .product-price {
          display: flex;
          align-items: center;
          gap: 10px;
      }
      
      .product-details .product-price .mrp {
          text-decoration: line-through;
          color: #777778;
      }
      
      .product-details .product-price .price {
          color: #486857;
      }
      
      .product button {
          width: 100%;
          height: 45px;
          margin-top: 15px;
          background-color: #486857;
          color: #ffffff;
          border: none;
          outline: none;
          font-family: "Bricolage Grotesque";
          font-weight: 500;
          cursor: pointer;
      }
      
      .products-banner img {
          width: 100%;
      }
      
      .show-more {
          margin: auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
      }
      
      .progress {
          width: 200px;
          height: 3px;
          background-color: #B7D1BD;
          margin: auto;
      }
      
      .progress div {
          height: 3px;
          background-color: #486857;
      }
      
      .show-more button {
          width: fit-content;
          height: 50px;
          border: none;
          outline: none;
          background-color: #5C7F6E;
          color: #ffffff;
          font-family: "Bricolage Grotesque";
          font-size: 15px;
          font-weight: 500;
          padding: 0 60px;
          cursor: pointer;
      }
      `}</style>
    </>
  )
}

export async function getServerSideProps(context) {
  const currentCategorySlug = context.params.category;
  const categoriesResponse = await fetch("https://www.gulfflora.ae/api/categories");
  const categories = await categoriesResponse.json();
  const currentCategory = categories.find((collectionEl) => {
    return collectionEl.slug === currentCategorySlug;
  });
  const currentCategoryId = currentCategory.id;
  const currentCategoryProductsResponse = await fetch(`https://www.gulfflora.ae/api/products?category=${currentCategoryId}&per_page=20&page=1`);
  const currentCategoryProducts = await currentCategoryProductsResponse.json();

  return {
    props: {
      categoryData: {
        currentCategory,
        currentCategoryProducts
      }
    }
  };
}

export default Occasion