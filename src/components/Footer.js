import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Footer = () => {
    const router = useRouter();
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div className="col-1">
                        <div className="menu-col">
                            <h6>Customer Service</h6>
                            <ul>
                                <li>Contact Us</li>
                                <li>
                                    <Link href={`/${router.query.city}/policy/refund`} legacyBehavior>
                                        <a>
                                            Refund
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={`/${router.query.city}/policy/cancellation`} legacyBehavior>
                                        <a>
                                            Cancellation
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"/contact"} legacyBehavior>
                                        <a>
                                            Contact Us
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="menu-col">
                            <h6>Information</h6>
                            <ul>
                                <li>About Gulfflora</li>
                                <li>Easy Ways To Pay</li>
                                <li>
                                    <Link href={`/${router.query.city}/policy/privacy`} legacyBehavior>
                                        <a>
                                            Privacy
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={`/${router.query.city}/policy/terms-conditions`} legacyBehavior>
                                        <a>
                                            Terms & Conditions
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={`/${router.query.city}/policy/terms-conditions`} legacyBehavior>
                                        <a>
                                            Delivery
                                        </a>
                                    </Link>
                                </li>
                                <li>Sitemap</li>
                            </ul>
                        </div>
                        <div className="menu-col">
                            <h6>Collections</h6>
                            <ul>
                                <li>Flowers</li>
                                <li>Gifts</li>
                            </ul>
                            <h6>Occasions</h6>
                            <ul>
                                <li>Anniversary</li>
                                <li>Birthday</li>
                                <li>Gifts</li>
                            </ul>
                        </div>
                        <div className="menu-col">
                            <h6>Cities</h6>
                            <ul>
                                <li>Dubai</li>
                                <li>Sharjah</li>
                                <li>Abu Dhabi</li>
                                <li>Ajman</li>
                                <li>Fujeirah</li>
                                <li>Ras Al Kaima</li>
                                <li>Umm Al Qwein</li>
                                <li>Al Ain</li>
                            </ul>
                        </div>
                        <div className="menu-col">
                            <h6>Websites</h6>
                            <ul>
                                <li>Gulfflora - Saudi Arabia</li>
                                <li>Gulfflora - United Arab Emirates</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-2">
                        <div>
                            <p>Copyright © 2024 AMRA ECOMMERCE PRIVATE LIMITED</p>
                        </div>
                    </div>
                </div>
            </footer>

            <style jsx>{`
                .footer-container {
                    font-family: "Bricolage Grotesque";
                    background-color: #ECECEF;
                }

                .col-1 {
                    width: 100%;
                    max-width: 1380px;
                    margin: auto;
                    display: flex;
                    justify-content: space-between;
                    padding: 100px 20px;
                }

                @media screen and (max-width: 767px){
                    .col-1 {
                        flex-direction: row;
                        flex-wrap: wrap;
                        row-gap: 50px;
                        padding: 50px 20px;
                    }
                }

                .menu-col {
                    width: max-content;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                @media screen and (max-width: 767px){
                    .menu-col {
                        width: 50%;
                    }
                }

                .menu-col ul {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    list-style: none;
                }

                .menu-col h6 {
                    font-size: 16px;
                    font-weight: 600;
                }

                .menu-col ul li {
                    font-size: 14px;
                    font-weight: 300;
                }

                .menu-col ul li     a  {
                    color: #000000;
                }

                .col-2 {
                    background-color: #ffffff;
                }

                .col-2 div {
                    width: 100%;
                    max-width: 1380px;
                    padding: 15px 20px;
                    margin: auto;
                }
            `}</style>
        </>
    )
}

export default Footer