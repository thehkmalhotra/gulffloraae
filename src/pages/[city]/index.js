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
    console.log(homepageData);
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