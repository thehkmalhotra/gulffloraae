import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

const PrivacyPolicy = ({ city }) => {
    const router = useRouter();
    const redirectPolicy = (event) => {
        const redirectUrl = event.target.value;
        router.push(redirectUrl);
    }
    return (
        <>
            <Head>
                <title>Terms and Conditions for Ordering Flowers Gifts | Gulfflora {city.charAt(0).toUpperCase() + city.slice(1)}</title>
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
                                <h1>Privacy</h1>
                                <p>At Gulfflora, we understand the importance of your privacy. We're committed to protecting your personal information and building trust with every interaction. This Privacy Policy explains how we collect, use, and safeguard your data, ensuring a smooth and secure gift-giving experience in the UAE.</p>
                                <h3>Information We Collect</h3>
                                <p>To create a delightful experience, we collect some information:</p>
                                <ul>
                                    <li><b>Personal Details:</b> When you place an order, create an account, or contact us, we might collect your name, contact details, billing and shipping addresses, and payment information. </li>
                                    <li><b>Enhancing Your Visit:</b> We collect non-personal information like your device type, IP address, and browsing behavior to personalize your experience and suggest relevant gifts.</li>
                                </ul>
                                <h3>How We Use Your Information</h3>
                                <p>We use your information responsibly to:</p>
                                <ul>
                                    <li><b>Fulfill Your Orders:</b> Process your orders efficiently and ensure timely delivery of your gifts.</li>
                                    <li><b>Top-Notch Customer Support:</b> Provide you with the best possible customer service and address any queries you may have.</li>
                                    <li><b>Stay Informed:</b> Keep you updated about your orders, including confirmation, tracking, and delivery notifications. </li>
                                    <li><b>Personalized Gifting:</b> Use your preferences to recommend gifts that suit your taste and the recipient's interests. </li>
                                    <li><b>Stay Connected (with your permission):</b> Send you emails or notifications about exciting promotions, new product arrivals, and relevant gift-giving inspiration. You can always choose to opt-out!</li>
                                    <li><b>Security & Fraud Prevention:</b> Protect our platform from unauthorized activities and ensure the security of your transactions.</li>
                                </ul>
                                <h3>Sharing Your Information</h3>
                                <p>We only share your information in specific situations:</p>
                                <ul>
                                    <li><b>Trusted Partners:</b> We collaborate with carefully chosen service providers who help us deliver your orders, process payments, and enhance your overall experience. They have strict access controls to protect your data.</li>
                                    <li><b>Legal Requirements:</b> If required by law, we may disclose your information to comply with legal obligations or court orders. </li>
                                    <li><b>Business Transfers:</b> In the event of a business merger or acquisition, your information may be transferred as part of the transaction, ensuring continuity of service. </li>
                                </ul>
                                <h3>Your Choices</h3>
                                <p>We empower you to control your data:</p>
                                <ul>
                                    <li><b>Your Information, Your Choice:</b> You have the right to access, update, or delete your personal information at any time. You can also manage your communication preferences and choose what information you want to receive from us.</li>
                                    <li><b>Opting Out:</b> You can unsubscribe from promotional communications. However, opting out might mean missing out on exclusive deals and exciting gift ideas!</li>
                                </ul>
                                <h3>Security Measures</h3>
                                <p>We take data security seriously and implement industry-standard security measures to safeguard your information from unauthorized access, breaches, or disclosures. We use secure servers, encryption technologies, and access controls to protect your privacy. While no method is foolproof, we're committed to maintaining the highest security standards. </p>
                                <h3>Cookies and Tracking</h3>
                                <p>Our website might use cookies to personalize your browsing experience. These small data files help us remember your preferences and tailor content accordingly. You can choose to disable cookies in your browser settings, but some functionalities might be affected. </p>
                                <h3>Children's Privacy</h3>
                                <p>Gulfflora's services are designed for users aged 13 and above. We do not knowingly collect or solicit data from children under 13.</p>
                                <h3>Changes to this Policy</h3>
                                <p>We may update this Privacy Policy periodically. If significant changes are made, we'll notify you directly. </p>
                                <h3>Contact Us</h3>
                                <p>If you have any questions about our Privacy Policy or data practices, please don't hesitate to contact us. We value your concerns and are always here to help!</p>
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

export default PrivacyPolicy