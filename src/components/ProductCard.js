import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router';

const ProductCard = (props) => {
  const router = useRouter();
  const date = new Date();
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return (
    <>
      <div className="product" key={props.slug}>
        <Link href={"/" + router.query.city + "/product/" + props.slug + "?referror_page=" + props.categoryId} legacyBehavior>
          <a>
            <img src={props.image} alt={props.name} />
            <div className="product-details">
              <h3>{props.name.substring(0, 30) + "..."}</h3>
              <p className="product-price">
                <span className="mrp">{props.regular_price}ر.س</span>
                <span className="price">{props.sale_price}ر.س</span>
              </p>
              {/* <p>Estimated Delivery: {
                props.categories.some(category => category.name === "Customized Theme Cakes" || category.name === "Premium Flowers") ?
                  (date.getDate() + 2) + " " + months[date.getMonth()] :
                  (date.getHours() > 14 ? (date.getDate() + 1) + " " + months[date.getMonth()] : date.getDate() + " " + months[date.getMonth()])
              }</p> */}
            </div>
          </a>
        </Link>
      </div>

      <style jsx>{`
            .product {
                background-color: #ffffff;
                text-decoration: none;
                width: 100%;
              }
              
              .product {
                  padding: 20px;
              }

              .product a {
                  display: flex;
                  flex-direction: column;
                  gap: 20px;
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
        `}</style>
    </>
  )
}

export default ProductCard