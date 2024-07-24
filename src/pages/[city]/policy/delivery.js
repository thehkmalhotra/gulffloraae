import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

const DeliveryPolicy = ({ city }) => {
    const router = useRouter();
    const redirectPolicy = (event) => {
        const redirectUrl = event.target.value;
        router.push(redirectUrl);
    }
    return (
        <>
            <Head>
                <title>Terms and Conditions for Ordering Flowers Gifts | Gulfflora</title>
            </Head>
            <div className="main">
                <Header  city={ city }></Header>
                <div className="body">
                    <div className="policy">
                        <div className="policy-container">
                            <div className="col-1">
                                <div className="desktop-navigation">
                                    <Link href={"/" + router.query.city + "/policy/cancellation"} legacyBehavior>
                                        <a>
                                            <button className={router.pathname.replace("/[city]/policy/", "") === "cancellation" ? "active" : ""}>Cancellation</button>
                                        </a>
                                    </Link>
                                    <Link href={"/" + router.query.city + "/policy/delivery"} legacyBehavior>
                                        <a>
                                            <button className={router.pathname.replace("/[city]/policy/", "") === "delivery" ? "active" : ""}>Delivery</button>
                                        </a>
                                    </Link>
                                    <Link href={"/" + router.query.city + "/policy/privacy"} legacyBehavior>
                                        <a>
                                            <button className={router.pathname.replace("/[city]/policy/", "") === "privacy" ? "active" : ""}>Privacy</button>
                                        </a>
                                    </Link>
                                    <Link href={"/" + router.query.city + "/policy/refund"} legacyBehavior>
                                        <a>
                                            <button className={router.pathname.replace("/[city]/policy/", "") === "refund" ? "active" : ""}>Refund</button>
                                        </a>
                                    </Link>
                                    <Link href={"/" + router.query.city + "/policy/terms-conditions"} legacyBehavior>
                                        <a>
                                            <button className={router.pathname.replace("/[city]/policy/", "") === "terms-conditions" ? "active" : ""}>Terms and Conditions</button>
                                        </a>
                                    </Link>
                                </div>
                                <div className="mobile-navigation">
                                    <select onChange={(event) => { redirectPolicy(event) }}>
                                        <option value={`/${city}/policy/cancellation`}>Cancellation</option>
                                        <option value={`/${city}/policy/delivery`}>Delivery</option>
                                        <option value={`/${city}/policy/privacy`}>Privacy</option>
                                        <option value={`/${city}/policy/refund`}>Refund</option>
                                        <option value={`/${city}/policy/terms-conditions`}>Terms and Conditions</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-2">
                                <h1>Delivery</h1>
                                <p>At Gulfflora, we understand the importance of getting your gifts delivered fresh, beautiful, and on time. This Delivery Policy outlines our commitment to exceptional service and ensures a smooth gifting experience in the UAE.</p>
                                <h3>Delivery Process and Risk Transfer</h3>
                                <ul>
                                    <li>Once your order is shipped, ownership and risk of loss for the products transfer to you.</li>
                                    <li>We partner with reliable courier services to ensure secure and efficient deliveries.</li>
                                </ul>
                                <h3>Delivery Timeframes</h3>
                                <ul>
                                    <li>We offer same-day delivery for all products (excluding theme cakes and premium flowers) placed before 2:00 PM. Orders placed after 2:00 PM will be delivered the next business day.</li>
                                    <li>Theme cakes and premium flowers typically require a minimum of 2 business days for delivery.</li>
                                </ul>
                                <h3>Receiving Your Gifts</h3>
                                <p>It's important for the recipient to carefully inspect the condition of the products (cakes, flowers, etc.) upon delivery before signing the receipt.</p>
                                <h3>Reporting Damaged Products</h3>
                                <p>If the delivered products are damaged, the recipient should:</p>
                                <ul>
                                    <li>**Refuse the delivery** and immediately contact our Customer Care team.</li>
                                    <li>Report any issues with the delivered products within **4 hours of receipt**. Claims reported later will not be entertained.</li>
                                </ul>
                                <h3>Replacements for Damaged Products</h3>
                                <p>In case of severely damaged products, we'll provide a replacement free of charge. Please allow a minimum of 6 hours for the replacement to arrive.</p>
                                <h3>Courier Delivery Complaints</h3>
                                <p>Any concerns regarding courier-delivered products must be reported within 48 hours of delivery. Delays beyond 48 hours may void your claim.</p>
                                <h3>Cosmetic Imperfections</h3>
                                <p>We strive for perfection, but sometimes minor cosmetic imperfections might occur, such as a name misspelled on a cake or a missing message with flowers.  For these minimal cosmetic issues, replacements or refunds will not be offered unless the damage is severe.</p>
                                <h3>"Keep as Surprise" Orders</h3>
                                <p>If you choose the "Keep as Surprise" option, we'll deliver the gift without revealing your identity to the recipient.</p>
                                <ul>
                                    <li>In case the recipient refuses the surprise order:</li>
                                    <li>We'll disclose your details for them to acknowledge and accept the order.</li>
                                    <li>If they still decline, the order will be returned to us, considered fulfilled on our end.</li>
                                    <li>Due to the perishable nature of many gifts, we'll strive to deliver within the chosen timeframe, but cannot guarantee it in case of a refused surprise order.</li>
                                </ul>
                                <h3>Contact Us</h3>
                                <p>For any questions or concerns regarding our Delivery Policy, please don't hesitate to contact our friendly Customer Care team at <a href="mailto:admin@gulfflora.ae">admin@gulfflora.ae</a>.</p>
                                <h3>Non-Delivery of Products</h3>
                                <ul>
                                    <li>We'll make one attempt to deliver your order.</li>
                                    <li>For perishable items, a second attempt may be possible at our discretion, and additional delivery charges may apply.</li>
                                </ul>
                                <h3>Undelivered Orders</h3>
                                <p>If the delivery cannot be completed after a single attempt due to reasons such as:</p>
                                <ul>
                                    <li>Incorrect shipping address provided</li>
                                    <li>Locked premises at delivery location</li>
                                    <li>Inaccurate contact information for the recipient</li>
                                    <li>Recipient refusing the delivery</li>
                                    <li>Delivered to a designated neighbor or building security as per recipient instructions</li>
                                    <li>Recipient unavailable</li>
                                </ul>
                                <p>The order will be considered fulfilled, and no refund or redelivery will be possible. We will charge you for the order even if it is not delivered.</p>
                                <p>We appreciate your understanding and cooperation in ensuring a smooth delivery process.  Happy gifting with Gulfflora!</p>

                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>

            <style jsx>{`
                .policy {
                    width: 100%;
                    padding: 50px 0;
                    font-family: "Bricolage Grotesque";
                }

                .policy-container {
                    width: 100%;
                    max-width: 940px;
                    padding: 0 20px;
                    margin: auto;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                .desktop-navigation {
                    display: flex !important;
                }

                .mobile-navigation {
                    display: none !important;
                }

                @media screen and (max-width: 767px){
                    .desktop-navigation {
                        display: none !important;
                    }
    
                    .mobile-navigation {
                        display: flex !important;
                    }
                }

                .mobile-navigation select {
                    width: 100%;
                    height: 50px;
                    border: none;
                    outline: none;
                    background-color: #ffffff;
                    font-family: "Bricolage Grotesque";
                    font-size: 16px;
                    font-weight: 500;
                    padding: 0 20px;
                }

                .policy-container .col-1 .navigation-box {
                    background-color: #ffffff;
                    width: 100%;
                    min-width: 100%;
                    height: 60px;
                    display: flex;
                    align-items: center;
                    justify-content: flex-start;
                    padding: 10px;
                }

                .policy-container .col-1 div {
                    display: flex;
                    justify-content: center;
                    gap: 30px;
                    width: 100%;
                }

                .policy-container .col-1 button {
                    width: max-content;
                    height: 45px;
                    background-color: transparent;
                    color: #5C7F6E;
                    opacity: .6;
                    border: none;
                    outline: none;
                    border-radius: 10px;
                    font-family: "Bricolage Grotesque";
                    font-size: 16px;
                    cursor: pointer;
                }

                .policy-container .col-1 button.active {
                    opacity: 1;
                    font-weight: 600;
                    text-decoration-line: underline;
                    text-underline-offset: 5px;
                }

                .policy-container .col-2 {
                    width: 100%;
                    margin-top: 50px;
                }

                @media screen and (max-width: 767px){
                    .policy-container .col-2 {
                        margin-top: 0px;
                    }
                }

                .policy-container .col-2 h1,
                .policy-container .col-2 h3,
                .policy-container .col-2 h3 {
                    margin-top: 40px;
                    color: #486857;
                }

                .policy-container .col-2 p {
                    margin-top: 5px;
                }

                .policy-container .col-2 ul,
                .policy-container .col-2 p,
                .policy-container .col-2 p a {
                    color: #5C7F6E;
                }

                .policy-container .col-2 p a {
                    font-weight: 600;
                    text-decoration-line: underline;
                }

                .policy-container .col-2 ul {
                    padding: 0 30px;
                    margin-top: 20px;
                    list-style: decimal;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
            `}</style>
        </>
    )
}

export function getServerSideProps(context) {
    return {
        props: {
            city: context.params.city
        }
    }
}

export default DeliveryPolicy