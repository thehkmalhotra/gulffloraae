import React, { useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Swiper from 'swiper'
import ProductCard from '@/components/ProductCard'
import CollectionCard from '@/components/CollectionCard'
import Marquee from '@/components/Marquee'

const City = ({ homepageData }) => {
    const router = useRouter();
    useEffect(()=>{
        const swiper = new Swiper(".banner-section .swiper", {
            slidesPerView: 1,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        })
    },[])

    return (
        <>
            <Head>
                <title>Online Flowers Gifts Delivery in {homepageData.city.charAt(0).toUpperCase() + homepageData.city.slice(1)} | Gulfflora | Same-Day Flowers Delivery</title>
            </Head>
            <div className="main">
                <Header  city={ homepageData.city }></Header>
                <div className="body">
                    <div className="banner-section">
                        <div className="swiper mySwiper">
                            <div className="swiper-wrapper">
                                <Link href={`${homepageData.city}/category/flowers`} className="swiper-slide" passHref>
                                    <img src="assets/images/flowers-banner-homepage.webp" alt="" />
                                </Link>
                                <Link href={`${homepageData.city}/category/cakes`} className="swiper-slide" passHref>
                                    <img src="assets/images/cakes-banner-homepage.webp" alt="" />
                                </Link>
                                <Link href={`${homepageData.city}/category/gifts`} className="swiper-slide" passHref>
                                    <img src="assets/images/gifts-banner-homepage.webp" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <Marquee></Marquee>
                    <div className="collection-section">
                        <div className="collection-container">
                            <h2>Best Collections</h2>
                            <div className="collections">
                                {homepageData.collections
                                    .filter((category) => {
                                        return category.slug === "anniversary-gifts" ||
                                            category.slug === "birthday-gifts" ||
                                            category.slug === "flowers" ||
                                            category.slug === "new-born-baby-gifts" ||
                                            category.slug === "gifts-for-him" ||
                                            category.slug === "gifts-for-her" ||
                                            category.slug === "flower-bouquets" ||
                                            category.slug === "flower-baskets" ||
                                            category.slug === "premium-flowers" ||
                                            category.slug === "flowers-n-teddy";
                                    })
                                    .map((collection, index) => {
                                        return (
                                            <CollectionCard name={collection.name} image_url={collection.category_image?.link} slug={"/" + router.query.city + "/category/" + collection.slug} key={index}></CollectionCard>
                                        );
                                    })
                                }

                            </div>
                        </div>
                    </div>
                    <div className="product-section">
                        <div className="product-container">
                            <div className="product-header">
                                <h2>Best Selling Flowers</h2>
                                <Link href={"/" + router.query.city + "/category/flowers"} legacyBehavior>
                                    <a href={"/" + router.query.city + "/category/flowers"}>
                                        All Flowers <svg width="10" viewBox="0 0 14 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 13L13 1M13 1H4M13 1V10" stroke="#5C7F6E" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                            <div className="products">
                                {homepageData.flowers?.products?.map((flower, index) => {
                                    return (
                                        <ProductCard name={flower.name} slug={flower.slug} image={flower.images[0].src} regular_price={flower.regular_price} sale_price={flower.sale_price} categories={flower.categories} key={index} categoryId="42"></ProductCard>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="product-section">
                        <div className="product-container">
                            <div className="product-header">
                                <h2>Best Selling Cakes</h2>
                                <Link href={"/" + router.query.city + "/category/cakes"} legacyBehavior>
                                    <a href={"/" + router.query.city + "/category/cakes"}>
                                        All Cakes <svg width="10" viewBox="0 0 14 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 13L13 1M13 1H4M13 1V10" stroke="#5C7F6E" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                            <div className="products">
                                {homepageData.cakes?.products?.map((cake, index) => {
                                    return (
                                        <ProductCard name={cake.name} slug={cake.slug} image={cake.images[0].src} regular_price={cake.regular_price} sale_price={cake.sale_price} categories={cake.categories} key={index} categoryId="19"></ProductCard>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="product-section">
                        <div className="product-container">
                            <div className="product-header">
                                <h2>Best Selling Gifts</h2>
                                <Link href={"/" + router.query.city + "/category/gifts"} legacyBehavior>
                                    <a href={"/" + router.query.city + "/category/gifts"}>
                                        All Gifts <svg width="10" viewBox="0 0 14 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 13L13 1M13 1H4M13 1V10" stroke="#5C7F6E" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </Link>
                            </div>
                            <div className="products">
                                {homepageData.gifts?.products?.map((gift, index) => {
                                    return (
                                        <ProductCard name={gift.name} slug={gift.slug} image={gift.images[0].src} regular_price={gift.regular_price} sale_price={gift.sale_price} categories={gift.categories} key={index} categoryId="17"></ProductCard>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>

            <style jsx>{`
        

.banner-section {
  width: 100%;
  overflow: hidden;
}

.banner-section img {
  width: 100%;
}

.collection-section {
  width: 100%;
  padding: 80px 0 0 0;
}

.collection-container {
  width: 100%;
  max-width: 1380px;
  padding: 0 20px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: "Bricolage Grotesque";
}

.collection-container h2 {
  font-size: 25px;
  font-weight: 900;
}

.collections {
  display: grid;
  grid-template-columns: repeat(6,1FR);
  gap: 20px;
}

@media screen and (max-width: 767px){
.collections {
  display: grid;
  grid-template-columns: repeat(2,1FR);
  gap: 20px;
}
}

.product-section {
  width: 100%;
  padding: 100px 0;
  font-family: "Bricolage Grotesque";
}

.product-container {
  width: 100%;
  max-width: 1380px;
  padding: 0 20px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.product-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.product-header a {
  color: #5C7F6E;
}

.products {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 10px;
}

@media screen and (max-width: 767px) {
.products {
  grid-template-columns: repeat(2, 1FR);
}
}

.products a {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.products-banner img {
  width: 100%;
  display: none;
}
      `}</style>
        </>
    )
}

export async function getServerSideProps(context) {
    const { city } = context.params;

    try {
        const [categoriesResponse, flowersResponse, cakesResponse, giftsResponse] = await Promise.all([
            fetch("https://gulfflora.ae/api/categories"),
            fetch("https://gulfflora.ae/api/products?category=42&per_page=10"),
            fetch("https://gulfflora.ae/api/products?category=19&per_page=10"),
            fetch("https://gulfflora.ae/api/products?category=17&per_page=10")
        ]);

        const [categories, flowers, cakes, gifts] = await Promise.all([
            categoriesResponse.json(),
            flowersResponse.json(),
            cakesResponse.json(),
            giftsResponse.json()
        ]);

        return {
            props: {
                homepageData: {
                    city: city,
                    collections: categories,
                    flowers: flowers,
                    cakes: cakes,
                    gifts: gifts,
                }
            }
        };
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: {
                error: "Failed to fetch data"
            }
        };
    }
}

export default City