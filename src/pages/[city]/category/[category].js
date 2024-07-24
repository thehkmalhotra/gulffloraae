import React, { useEffect, useState } from 'react'
import Header from '@/components/Header';
import Head from 'next/head';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';

const Category = ({ categoryData }) => {
  const { city } = categoryData;
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryProducts, setCategoryProducts] = useState(categoryData.currentCategoryProducts.products);
  const currentCategoryId = categoryData.currentCategory.id;
  const totalPages = Math.ceil(categoryData.currentCategory.count / 20);
  const progress = (currentPage / totalPages) * 100;

  const fetchCategoryProducts = async () => {
    const currentCategoryProductsResponse = await fetch(`https://www.gulfflora.ae/api/products?category=${currentCategoryId}&per_page=20&page=${currentPage}&count=true`);
    const currentCategoryProductsData = await currentCategoryProductsResponse.json();
    if (currentPage === 1) {
      setCategoryProducts(currentCategoryProductsData.products);
    } else {
      setCategoryProducts(prevProducts => [...prevProducts, ...currentCategoryProductsData.products]);
    }
  };

  useEffect(() => {
    fetchCategoryProducts();
  }, [currentPage]);
  console.log(categoryProducts);

  return (
    <>
      <Head>
        <title>{categoryData.currentCategory.category_title} | Gulfflora</title>
      </Head>
      <div className="main">
        <Header city={ city }></Header>
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
                  {categoryProducts?.map((product,index) => {
                    return (
                      <ProductCard name={product.name} slug={product.slug} image={product.images[0].src} regular_price={product.regular_price} sale_price={product.sale_price} categories={product.categories} categoryId={currentCategoryId} key={index}></ProductCard>
                    )
                  })}
                </div>
                {currentPage < totalPages ? <div className="show-more">
                  <div className="progress"><div style={{ width: `${progress}%` }}></div></div>
                  <button data-current-page={currentPage} onClick={() => setCurrentPage(currentPage + 1)}>Show more Products</button>
                </div> : ""}
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>

      <style jsx>{`
        .category-container {
          display: flex;
          flex-direction: column;
          gap: 50px;
      }
      
      .category-hero {
          position: relative;
          z-index: -1;
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
          grid-template-columns: repeat(2, 1fr);
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
          width: 100%;
      }

      .product a {
          padding: 20px;
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
      
      .product img {
          width: 100%;
          margin: auto;
      }
      
      .product-details {
          display: flex;
          flex-direction: column;
          gap: 10px;
      }

      .product-details h3 {
        color: #313131;
        font-size: 18px;
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
          font-weight: 400;
      }
      
      .product-details .product-price .price {
          color: #486857;
          font-weight: 400;
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
  const city = context.params.city;
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
        city,
        currentCategory,
        currentCategoryProducts
      }
    }
  };
}

export default Category