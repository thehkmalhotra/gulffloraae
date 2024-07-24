import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

const CancellationPolicy = ({ city }) => {
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
                <Header city={ city }></Header>
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
                                <h1>Cancellation</h1>
                                <p>Life can be unpredictable, and at Gulfflora, we understand that. You might need to change your plans, and that's perfectly alright! This policy clarifies how cancellations work, ensuring a smooth experience for you when sending gifts in the UAE.</p>
                                <h3>Understanding Time Slots</h3>
                                <p>We process orders based on the time slots you choose during checkout. The cancellation fees depend on the time remaining before your chosen slot begins.</p>
                                <h3>Cancellation Window and Fees</h3>
                                <ul>
                                    <li><b>24 Hours or More Before Delivery:</b> Cancel with ease! We charge a minimal 10% cancellation fee, with a 90% refund returned directly to your bank account.</li>
                                    <li><b>Between 12-24 Hours Before Delivery:</b> A slightly higher 20% cancellation fee applies. You'll receive an 80% refund back to your bank account.</li>
                                    <li><b>Within 12 Hours of Delivery:</b> For last-minute changes, cancellations are not possible. The full order value will be charged.</li>
                                </ul>
                                <h3>Refunds: Flexibility When Needed</h3>
                                <p>We understand that sometimes things are out of your control. In some cases, we may consider a refund to your wallet or bank account even outside the standard window. This applies to situations beyond your control, like emergencies or unforeseen circumstances. Please contact us to discuss these situations.</p>
                                <h3>Non-Cancelable Orders</h3>
                                <p>Please note that some order categories cannot be cancelled due to their time-sensitive nature:</p>
                                <ul>
                                    <li><b>Same Day Delivery:</b> Orders placed for delivery on the same day cannot be cancelled. If you cancel or the recipient refuses the delivery, you will not be eligible for a refund. This includes same-day midnight deliveries.</li>
                                    <li><b>Special Occasion Orders:</b> Orders for special days like birthdays or holidays cannot be cancelled, and no refunds will be initiated.</li>
                                </ul>
                                <h3>Same Day Delivery</h3>
                                <p>We offer the convenience of same-day delivery (order placed and delivered on the same date). However, this is an **attempt**, not a guaranteed service. We'll process same-day delivery orders within 24 hours of your chosen time slot.</p>
                                <p>The cut-off time for same-day orders is 12 pm on the day before delivery.</p>
                                <h3>Key Takeaways</h3>
                                <ul>
                                    <li><b>Plan in Advance for Special Occasions:</b> For guaranteed delivery on specific dates (birthdays, holidays), we recommend placing your order well in advance.</li>
                                    <li><b>Contact Us for Questions:</b> If you have any questions about our Cancellation Policy or need help placing your order, our friendly customer service team is here to assist you.</li>
                                </ul>
                                <br />
                                <p>We're committed to providing you with a delightful gifting experience. This policy ensures transparency and flexibility when navigating cancellations. Happy gifting!</p>

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

export default CancellationPolicy