import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

const TermsConditionsPolicy = ({ city }) => {
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
                                <h1>Terms & Conditions</h1>
                                <p>Welcome to Gulfflora, your trusted source for gifts in the UAE!</p>
                                <h3>What We Offer</h3>
                                <ul>
                                    <li>Unforgettable Gifts: Browse our extensive collection for every occasion.</li>
                                    <li>Freshest Flowers: Send stunning arrangements to br /ighten someone's day.</li>
                                    <li>Delectable Cakes: Impress loved ones with our delicious cakes.</li>
                                    <li>Convenience & Peace of Mind: Order online for fast UAE delivery. Secure payment gateways ensure a smooth experience.</li>
                                </ul>
                                <h3>Using Gulfflora Responsibly</h3>
                                <ul>
                                    <li>Respecting Our Content: Images, descriptions, and content are our intellectual property. Don't copy them without permission.</li>
                                    <li>Using Our Services Fairly: Don't use automated tools to scrape information from our website.</li>
                                </ul>
                                <p>We take your privacy seriously. Please refer to our Privacy Policy to understand how we protect your information.</p>
                                <h3>Limitations of Liability</h3>
                                <p>We strive to provide the best experience, but cannot guarantee a perfect or error-free website. The information we provide is for your reference only. We are not liable for any indirect or consequential damages.</p>
                                <h3>Exploring Beyond Gulfflora</h3>
                                <p>Our website may contain links to other websites. These websites are not under our control, and we are not responsible for their content or practices.</p>
                                <h3>Protecting Us Both</h3>
                                <p>By using our website, you agree to indemnify us for any claims or legal issues that arise from your use of our services.</p>
                                <h3>Changes to Our Terms</h3>
                                <p>We may occasionally update our terms and conditions. We will post the changes on our website. Continued use signifies that you agree to the new terms.</p>
                                <h3>Resolving Disputes</h3>
                                <p>These terms and conditions are governed by the laws of the United Arab Emirates. Any disputes will be settled in the courts of the UAE.</p>
                                <h3>We're Here to Help!</h3>
                                <p>If you have any questions, please don't hesitate to contact us using the information on our website.</p>
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

export default TermsConditionsPolicy