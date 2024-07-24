import OrderItemCard from "@/components/OrderItemCard";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { parseCookies, setCookie } from "nookies";
import { useEffect, useState } from "react";

const Cart = () => {
    const router = useRouter();
    const [paymentSessionId, setPaymentSessionId] = useState("");
    const [deliveryDateFieldStatus, setDeliveryDateFieldStatus] = useState(false);
    const currentDate = new Date();
    const deliveryDates = [];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const isPast2PM = currentDate.getHours() >= 14;
    let startDayOffset = isPast2PM ? 1 : 0;
    for (let i = 0; i < 15; i++) {
        const nextDate = new Date(currentDate);
        nextDate.setDate(currentDate.getDate() + i + startDayOffset);
        deliveryDates.push({
            date: `${days[nextDate.getDay()]} ${months[nextDate.getMonth()]} ${nextDate.getDate()}`
        });
    }

    const [cart, setCart] = useState([]);
    useEffect(() => {
        const cookies = parseCookies();
        const cartData = cookies.cart ? JSON.parse(cookies.cart) : [];
        setCart(cartData);
    }, []);

    const handleRemoveCartItem = (itemName) => {
        const updatedCart = cart.filter(item => item.name !== itemName);
        setCart(updatedCart);
        setCookie(null, "cart", JSON.stringify(updatedCart));
    };

    const cartSubtotal = cart.reduce((total, item) => total + item.total, 0);
    const cartTotal = cartSubtotal + 29;

    const [paymentDetails, setPaymentDetails] = useState({
        fullName: "",
        phoneNumber: "",
        email: "",
        receiverName: "",
        receiverPhoneNumber: "",
        addressLine: "",
        city: "",
        zipCode: "",
        deliveryDate: ""
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPaymentDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value
        }));
    };

    function handleCashfreeCheckout(event) {
        let allFieldsFilled = true;
        event.preventDefault();
        document.querySelectorAll("input").forEach((input) => {
            input.value === "" ? (input.classList.add("empty-fields"), allFieldsFilled = false) : (input.classList.remove("empty-fields"), allFieldsFilled = true)
        });
        const deliveryDateLabel = document.querySelector(".delivery-date-col label");
        const deliveryDateInput = document.querySelectorAll(".delivery-date-col input:checked");
        deliveryDateInput.value === "" ? (deliveryDateLabel.classList.add("empty-fields"), allFieldsFilled = false) : (deliveryDateLabel.classList.remove("empty-fields"), allFieldsFilled = true);
        if (allFieldsFilled == true) {
            fetch("https://gulfflora.ae/api/order",
                {
                    method: "POST",
                    body: JSON.stringify({ paymentDetails: paymentDetails, cart: cart })
                }
            ).then(response => response.json()).then(data => handleCashfreePayment(data.cashfreeSession.payment_session_id))
        }
        else { }
    }

    return (
        <>
            <Head>
                <script src="https://sdk.cashfree.com/js/v3/cashfree.js"></script>
            </Head>
            <div className="main">
                <div className="body">
                    <div className="cart-header">
                        <div>
                            <Link href="/" passHref>
                                <img src="/assets/images/gulfflora-logo.svg" alt="Gulf Flora Logo" />
                            </Link>
                            <hr />
                            <ul>
                                <li>Order Overview</li>
                            </ul>
                        </div>
                    </div>
                    <div className="cart-container">
                        <div className="col-1">
                            <div className="container-1">
                                <div className="order-summary-header">
                                    <h1>Order Summary</h1>
                                    <p>This zig zag 20 red roses bouquet makes a perfect gift for your girlfriend, wife, sister, brother or husband.</p>
                                </div>
                                <div className="order-items">
                                    {cart.map((item, index) => {
                                        return (
                                            <OrderItemCard name={item.name} image={item.images[0].src} quantity={item.quantity} total={item.total} handleRemoveCartItem={handleRemoveCartItem} key={index} />
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="container-2">
                                <div className="order-summary">
                                    <div>
                                        <p className="order-summary-title">Subtotal</p>
                                        <p className="order-summary-pricing">{cartSubtotal}ر.س</p>
                                    </div>
                                    <div>
                                        <p className="order-summary-title">Shipping</p>
                                        <p className="order-summary-pricing">ر.س29</p>
                                    </div>
                                    <div>
                                        <p className="order-summary-title"><b>Total</b></p>
                                        <p className="order-summary-pricing"><b>{cartTotal}ر.س</b></p>
                                    </div>
                                </div>
                                <p className="policy-text">By confirming this order you accept our Terms of Service Agreement and our Data Protection Policy</p>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="payment-summary-header">
                                <h1>Payment Details</h1>
                                <p>Checkout your order by providing the below
                                    details</p>
                            </div>
                            <form>
                                <div className="two-col">
                                    <label>
                                        Name
                                        <input type="text" placeholder="Enter your full name" name="fullName" onChange={handleInputChange} />
                                    </label>
                                    <label>
                                        Phone Number
                                        <input type="tel" placeholder="Enter your phone number" name="phoneNumber" onChange={handleInputChange} />
                                    </label>
                                </div>
                                <label>
                                    Email
                                    <input type="email" placeholder="Enter your email address" name="email" onChange={handleInputChange} />
                                </label>
                                <div className="two-col">
                                    <label>
                                        Receiver Name
                                        <input type="text" placeholder="Enter receiver's full name" name="receiverName" onChange={handleInputChange} />
                                    </label>
                                    <label>
                                        Receiver Phone Number
                                        <input type="tel" placeholder="Enter receiver's phone number" name="receiverPhoneNumber" onChange={handleInputChange} />
                                    </label>
                                </div>

                                <div className="address-col">
                                    <label>
                                        Receiver Address
                                        <div>
                                            <input type="text" placeholder="ex: Par 3 - 9 hole course, Vida Residence" name="addressLine" onChange={handleInputChange} />
                                            <div className="two-col">
                                                <input type="text" placeholder="City" name="city" style={{ borderTop: "unset", borderRight: "unset" }} onChange={handleInputChange} />
                                                <input type="text" placeholder="Zip Code" name="zipCode" style={{ borderTop: "unset" }} onChange={handleInputChange} />
                                            </div>
                                        </div>
                                    </label>
                                </div>
                                <div className="delivery-date-col">
                                    <label>
                                        <p onClick={() => setDeliveryDateFieldStatus(!deliveryDateFieldStatus)}>Select delivery date</p>
                                        {deliveryDateFieldStatus && (
                                            <div className="dates">
                                                {deliveryDates.map((date, index) => {
                                                    return (
                                                        <div className="date" key={index}>
                                                            <label>
                                                                <input type="radio" name="deliveryDate" value={date.date} onChange={handleInputChange} />
                                                                <p>{date.date}</p>
                                                            </label>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </label>
                                </div>
                                <button onClick={handleCashfreeCheckout}>Pay س5189</button>
                                <div className="secure-statement">
                                    <svg width="18" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.3335 14.6667C2.3335 12.074 2.3335 10.7776 3.13895 9.97214C3.94441 9.16669 5.24077 9.16669 7.8335 9.16669H15.1668C17.7596 9.16669 19.0559 9.16669 19.8614 9.97214C20.6668 10.7776 20.6668 12.074 20.6668 14.6667C20.6668 17.2594 20.6668 18.5558 19.8614 19.3612C19.0559 20.1667 17.7596 20.1667 15.1668 20.1667H7.8335C5.24077 20.1667 3.94441 20.1667 3.13895 19.3612C2.3335 18.5558 2.3335 17.2594 2.3335 14.6667Z" stroke="#212121" strokeWidth="2" />
                                        <path d="M12 12.8333V16.5" stroke="#212121" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M10.3335 13.5833C10.3335 12.923 10.8568 12.4 11.5168 12.4H12.4835C13.1438 12.4 13.6668 12.923 13.6668 13.5833C13.6668 14.2436 13.1438 14.7667 12.4835 14.7667H11.5168C10.8568 14.7667 10.3335 14.2436 10.3335 13.5833Z" stroke="#212121" strokeWidth="2" />
                                        <path d="M17.3333 5.95334C16.4037 4.47149 14.7844 3.48078 12.977 3.48078C11.1696 3.48078 9.55033 4.47149 8.62069 5.95334" stroke="#212121" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                    <p>SSL secure connection</p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .main,
                .body {
                    height: 100%;
                }

                .cart-header {
                    height: 80px;
                    width: 100%;
                    background-color: #F7F7FA;
                    border-bottom: solid 1px #B7D1BD;
                    display: flex;
                    position: sticky;
                    top: 0;
                }

                .cart-header div {
                    width: 100%;
                    max-width: 1390px;
                    padding: 0 20px;
                    margin: auto;
                    display: flex;
                    align-items: center;
                    gap: 50px;
                }

                .cart-header img {
                    width: 70px;
                }

                .cart-header div hr {
                    height: 40px;
                    width: 1px;
                    border: solid .5px #7EA68D;
                }

                .cart-header div ul {
                    list-style: none;
                    font-family: "Bricolage Grotesque";
                    font-weight: 400;
                    font-size: 15px;
                    color: #212121;
                }

                .cart-container {
                    height: 100%;
                    width: 100%;
                    display: flex;
                }

                @media screen and (max-width: 767px){
                .cart-container {
                    flex-direction: column;
                    gap: 100px;
                }
                }

                .cart-container .col-1,
                .cart-container .col-2 {
                    width: 100%;
                    height: 100%;
                }

                .cart-container .col-1 {
                    background-color: #ffffff;
                    border-right: solid 1px #B7D1BD;
                    display: flex;
                    flex-direction: column;
                    gap: 50px;
                    padding: 50px 0;
                }

                @media screen and (max-width: 767px) {
                    .cart-container .col-1 {
                        border: none;
                    }
                }

                .cart-container .col-1 .container-1 {
                    height: 70%;
                    min-height: 70%;
                    padding: 0 10rem;
                    display: flex;
                    flex-direction: column;
                    gap: 60px;
                }

                @media screen and (max-width: 767px) {
                    .cart-container .col-1 .container-1 {
                        height: auto;
                        padding: 0 20px;
                    }
                }

                @media screen and (min-width: 1024px) {
                    .cart-container .col-1 .container-1 {
                        padding: 0 5rem;
                    }
                }

                .order-summary-header {
                    display: flex;
                    flex-direction: column;
                    gap: 10px !important;
                }

                .order-summary-header h1 {
                    font-family: "Bricolage Grotesque";
                }

                .order-summary-header p {
                    font-family: "Bricolage Grotesque";
                    font-weight: 200;
                    color: #21212170;
                }

                .cart-container .col-1 .container-2 {
                    height: 30%;
                    min-height: 30%;
                    padding: 50px 10rem;
                    background-color: #F7F7FA;
                    border-top: solid 1px #B7D1BD;
                    display: flex;
                    flex-direction: column;
                    gap: 40px;
                }

                @media screen and (max-width: 767px) {
                    .cart-container .col-1 .container-2 {
                        height: auto;
                        padding: 0 20px;
                        background-color: #FFFFFF;
                        border: none;
                    }
                }

                @media screen and (min-width: 1024px) {
                    .cart-container .col-1 .container-2 {
                        padding: 50px 5rem;
                    }
                }

                .order-summary {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .order-summary div {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .order-summary div p {
                    font-family: "Bricolage Grotesque";
                    font-weight: 300;
                    font-size: 16px;
                }

                .order-summary-title {
                    color: #414141;
                }

                .order-summary-pricing {
                    color: #486857;
                }

                .policy-text {
                    font-family: "Bricolage Grotesque";
                    font-weight: 100;
                    font-size: 14px;
                    color: #000000;
                }

                @media screen and (max-width: 767px){
                    .policy-text {
                        display: none;
                    }
                }

                .order-summary-header {
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                .order-items {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 30px;
                }

                .cart-container .col-2 {
                    border-right: solid 1px #B7D1BD;
                    display: flex;
                    flex-direction: column;
                    gap: 50px;
                    padding: 50px 10rem;
                }

                @media screen and (max-width: 767px) {
                    .cart-container .col-2 {
                        padding: 50px 20px;
                    }
                }

                @media screen and (min-width: 1024px) {
                    .cart-container .col-2 {
                        padding: 50px 5rem;
                    }
                }

                .payment-summary-header {
                    display: flex;
                    flex-direction: column;
                    gap: 10px !important;
                }

                .payment-summary-header h1 {
                    font-family: "Bricolage Grotesque";
                }

                .payment-summary-header p {
                    font-family: "Bricolage Grotesque";
                    font-weight: 200;
                    color: #21212170;
                }

                form {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }

                form label {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    font-family: "Bricolage Grotesque";
                    font-size: 16px;
                    font-weight: 400;
                }

                form .two-col {
                    display: flex;
                    gap: 15px;
                }

                @media screen and (max-width: 767px){
                    form .two-col {
                        flex-direction: column;
                    }
                }

                form input {
                    width: 100%;
                    height: 45px;
                    background-color: #FFFFFF;
                    border: solid 1px #B7D1BD;
                    border-radius: 0;
                    outline: none;
                    font-family: "Bricolage Grotesque";
                    font-size: 15px;
                    font-weight: 300;
                    color: #21212170;
                    padding: 0 10px;
                }

                form input.empty-fields {
                    border: solid 1px #FF0000;
                }

                form .address-col {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                form .address-col .two-col {
                    gap: 0;
                }

                form .address-col label {
                    gap: 10px;
                }

                .delivery-date-col label {
                    width: 100%;
                    height: 45px;
                    background-color: #FFFFFF;
                    border: solid 1px #B7D1BD;
                    outline: none;
                    font-family: "Bricolage Grotesque";
                    font-size: 15px;
                    font-weight: 300;
                    color: #21212170;
                    padding: 0 10px;
                    display: flex;
                    justify-content: center;
                    position: relative;
                    cursor: pointer;
                }

                .delivery-date-col label.empty-fields {
                    border: solid 1px #FF0000;
                }

                .dates {
                    width: calc(100% + 2px);
                    max-height: 160px;
                    position: absolute;
                    top: calc(100% + 1px);
                    left: -1px;
                    background-color: #FFFFFF;
                    overflow-y: scroll;
                    visibility: none;
                }

                .dates.active {
                    visibility: visible;
                }

                .date label {
                    border-top: none;
                    width: 100%;
                    height: 45px;
                }

                .date label input {
                    display: none;
                }

                .date label p {
                    height: 100%;
                    width: 100%;
                    font-family: "Bricolage Grotesque";
                    font-size: 15px;
                    font-weight: 300;
                    color: #21212170;
                    padding: 0;
                    display: flex;
                    align-items: center;
                }

                .date label:hover {
                    background-color: #5C7F6E;
                }

                .date label:hover p {
                    color: #FFFFFF;
                }

                form button {
                    width: 100%;
                    height: 50px;
                    margin-top: 20px;
                    background-color: #5C7F6E;
                    color: #FFFFFF;
                    border: none;
                    outline: none;
                    font-family: "Bricolage Grotesque";
                    font-weight: 500;
                    font-size: 16px;
                }

                .secure-statement {
                    margin: auto;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    color: #212121;
                    font-family: "Bricolage Grotesque";
                    font-weight: 400;
                    font-size: 14px;
                }
            `}</style>
        </>
    );
};

export default Cart;