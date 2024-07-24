import Footer from "@/components/Footer";
import Header from "@/components/Header"
import { useState } from "react";

const Contact = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");
    const [loader, setLoader] = useState(false);
    async function contactHandler(event) {
        event.preventDefault();
        if (firstName && lastName && email && phoneNumber && message !== "") {
            setLoader(true);
            document.querySelectorAll("input").forEach((input) => {
                input.classList.remove("required");
            })
            document.querySelector("textarea").classList.remove("required");
            const slackNotificationUrl = "https://hooks.slack.com/services/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";
            const slackNotificationResponse = await fetch(slackNotificationUrl, {
                method: "POST",
                body: JSON.stringify({
                    text: `*First Name:*  ${firstName}\n *Last Name:* ${lastName}\n *Email:* ${email}\n *Phone Number:* ${phoneNumber}\n *Message:* ${message}`
                })
            })
            const slackNotificationResult = await slackNotificationResponse.text();
            if(slackNotificationResult === "ok"){
                setLoader(false);
            }
        }
        else {
            document.querySelectorAll("input").forEach((input) => {
                if (input.value === "") {
                    input.classList.add("required");
                }
            });
            if (document.querySelector("textarea").value === "") {
                document.querySelector("textarea").classList.add("required");
            }
        }
    }

    return (
        <>
            <div className="main">
                <Header></Header>
                <div className="body">
                    <div className="contact">
                        <div className="contact-container">
                            <div className="col-1">
                                <div className="contact-header">
                                    <h1>Contact Us</h1>
                                    <p>We will get back to you soon as we can.</p>
                                </div>
                                <form onSubmit={contactHandler}>
                                    <label className="name-wrapper">
                                        First Name
                                        <input type="text" name="first_name" placeholder="Enter your first name" onChange={(event) => { setFirstName(event.target.value) }} />
                                    </label>
                                    <label className="name-wrapper">
                                        Last Name
                                        <input type="text" name="last_name" placeholder="Enter your last name" onChange={(event) => { setLastName(event.target.value) }} />
                                    </label>
                                    <label className="email-wrapper">
                                        Email
                                        <input type="text" name="email" placeholder="example: orders@gulfflora.com" onChange={(event) => { setEmail(event.target.value) }} />
                                    </label>
                                    <label className="phone-wrapper">
                                        Phone Number
                                        <div className="phone-container">
                                            <input type="text" name="phone_number" placeholder="example: +918512010563" onChange={(event) => { setPhoneNumber(event.target.value) }} />
                                        </div>
                                    </label>
                                    <label className="message-wrapper">
                                        Your Message
                                        <textarea name="message" cols="30" rows="10" placeholder="Enter your message" onChange={(event) => { setMessage(event.target.value) }}></textarea>
                                    </label>
                                    <button>
                                        {loader ? <div className="spinner">
                                            <div></div>
                                        </div> : "Send"}
                                    </button>
                                </form>
                            </div>
                            <div className="col-2">
                                <div className="assistance-container">
                                    <div className="assistance-header">
                                        <h3>Need assistance?</h3>
                                        <p>Our Customer Care team is available from 10am - 10pm, 7 days a week.</p>
                                    </div>
                                    <div className="assistance">
                                        <h1>Amra Ecommerce Private Limited</h1>
                                        <div className="assistance-col">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.58151 19.8267C2.32295 20.793 3.20701 21.677 4.17335 21.4185L6.39939 20.8229C6.78393 20.72 7.19121 20.7791 7.54753 20.9565C8.88837 21.6244 10.4003 22 12 22Z"
                                                    stroke="#1C274C" strokeWidth="1.5" />
                                                <path d="M8 10.5H16" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
                                                <path d="M8 14H13.5" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>

                                            <div>
                                                <h4><a href="tel: +91 80088 12534">Chat with us</a></h4>
                                                <p>Wait time: Approximate 5 minutes.</p>
                                            </div>
                                        </div>
                                        <div className="assistance-col">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M22 12C22 14.2091 20.2091 16 18 16C15.7909 16 14 14.2091 14 12C14 9.79086 15.7909 8 18 8C20.2091 8 22 9.79086 22 12Z"
                                                    stroke="#1C274C" strokeWidth="1.5" />
                                                <path
                                                    d="M10 12C10 14.2091 8.20914 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C8.20914 8 10 9.79086 10 12Z"
                                                    stroke="#1C274C" strokeWidth="1.5" />
                                                <path d="M6 16H18" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>
                                            <p>Call us</p>
                                            <p><a href="tel: +91 80088 12534">+91 8008 812534</a></p>
                                        </div>
                                        <div className="assistance-col">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z"
                                                    stroke="#1C274C" strokeWidth="1.5" />
                                                <path
                                                    d="M6 8L8.1589 9.79908C9.99553 11.3296 10.9139 12.0949 12 12.0949C13.0861 12.0949 14.0045 11.3296 15.8411 9.79908L18 8"
                                                    stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round" />
                                            </svg>

                                            <p>Email us at</p>
                                            <p><a href="mailto: admin@gulfflora.ae">admin@gulfflora.ae</a></p>
                                        </div>
                                        <div className="assistance-col">
                                            <svg width="30" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M18 8L18.9487 8.31623C19.9387 8.64624 20.4337 8.81124 20.7169 9.20407C21 9.5969 21 10.1187 21 11.1623V16.829C21 18.1199 21 18.7653 20.6603 19.18C20.5449 19.3208 20.4048 19.4394 20.247 19.5301C19.7821 19.797 19.1455 19.6909 17.8721 19.4787C16.6157 19.2693 15.9875 19.1646 15.3648 19.2167C15.1463 19.235 14.9292 19.2676 14.715 19.3144C14.1046 19.4477 13.5299 19.735 12.3806 20.3097C10.8809 21.0596 10.131 21.4345 9.33284 21.5501C9.09242 21.5849 8.8498 21.6021 8.60688 21.6016C7.80035 21.6001 7.01186 21.3373 5.43488 20.8116L5.05132 20.6838C4.06129 20.3538 3.56627 20.1888 3.28314 19.7959C3 19.4031 3 18.8813 3 17.8377V12.908C3 11.2491 3 10.4197 3.48841 9.97358C3.57388 9.89552 3.66809 9.82762 3.76917 9.77122C4.34681 9.44894 5.13369 9.71123 6.70746 10.2358"
                                                    stroke="#1C274C" strokeWidth="1.5" />
                                                <path
                                                    d="M6 7.70031C6 4.55211 8.68629 2 12 2C15.3137 2 18 4.55211 18 7.70031C18 10.8238 16.085 14.4687 13.0972 15.7721C12.4007 16.076 11.5993 16.076 10.9028 15.7721C7.91499 14.4687 6 10.8238 6 7.70031Z"
                                                    stroke="#1C274C" strokeWidth="1.5" />
                                                <circle cx="12" cy="8" r="2" stroke="#1C274C" strokeWidth="1.5" />
                                            </svg>
                                            <div>
                                                <p>HNO 1-10-75/2/2/H, Rasheed Colony, Near Welcome Board, Medak, Telangana,
                                                    502110, IN</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>

            <style jsx>{`
                .contact {
                    width: 100%;
                    max-width: 1380px;
                    margin: auto;
                    padding: 0 20px;
                }

                .contact-container {
                    padding: 50px 0;
                    font-family: "Bricolage Grotesque";
                    display: flex;
                    gap: 200px;
                }

                @media screen and (max-width: 767px){
                    .contact-container {
                        flex-direction: column;
                        gap: 80px;
                    }
                }
                
                .contact-container .col-1 {
                    width: 50%;
                    display: flex;
                    flex-direction: column;
                    gap: 40px;
                }

                @media screen and (max-width: 767px){
                    .contact-container .col-1 {
                        width: 100%;
                    }
                }
                
                .contact-container .col-1 .contact-header {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                
                .contact-container .col-1 .contact-header p {
                    color: #777778;
                }
                
                .contact-container .col-1 form {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                }
                
                form label {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    font-weight: 600;
                    font-size: 15px;
                }
                
                .name-wrapper {
                    width: calc(50% - 10px);
                }
                
                .email-wrapper,
                .phone-wrapper,
                .message-wrapper {
                    width: 100%;
                }
                
                .phone-container {
                    display: flex;
                    gap: 10px;
                }
                
                form input {
                    height: 40px;
                    width: 100%;
                    border: solid 1px#7EA68D;
                    outline: none;
                    background-color: transparent;
                    padding: 0 10px;
                    font-family: "Bricolage Grotesque";
                }
                
                form input.required {
                    border: solid 1px #ae1800;
                }
                
                .phone-container input:first-child {
                    width: 60px;
                }
                
                .phone-container input:last-child {
                    width: calc(100% - 60px);
                }
                
                form textarea {
                    width: 100%;
                    border: solid 1px#7EA68D;
                    outline: none;
                    background-color: transparent;
                    padding: 10px;
                    font-family: "Bricolage Grotesque";
                    resize: none;
                }
                
                form textarea.required {
                    border: solid 1px #ae1800;
                }
                
                form button {
                    height: 50px;
                    width: 100%;
                    background-color: #5C7F6E;
                    color: #fff;
                    font-weight: 500;
                    border: none;
                    outline: none;
                    font-family: "Bricolage Grotesque";
                    cursor: pointer;
                }

                .spinner {
                    width: 20px;
                    height: 20px;
                    margin: auto;
                }

                .spinner div {
                    width: 100%;
                    height: 100%;
                    border-radius: 100px;
                    border: solid 3px transparent;
                    border-top-color: #ffffff;
                    animation: spinner 2s infinite linear;
                }

                @keyframes spinner {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                }
                
                .contact-container .col-2 {
                    width: 50%;
                }

                @media screen and (max-width: 767px){
                    .contact-container .col-2 {
                        width: 100%;
                    }
                }
                
                .assistance-container {
                    display: flex;
                    flex-direction: column;
                    gap: 30px;
                }
                
                .assistance-header {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                }
                
                .assistance-header h3 {
                    font-weight: 600;
                }
                
                
                .assistance-header p {
                    color: #777778;
                }
                
                .assistance {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                
                .assistance-col {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                }
                
                .assistance-col div {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                }
                
                .assistance-col div p {
                    font-weight: 300;
                }
                
                .assistance-col a {
                    color: #5C7F6E;
                    text-decoration-line: underline;
                    text-decoration-color: #5C7F6E99;
                    text-decoration-thickness: 1px;    
                }
            `}</style>
        </>
    )
}

export default Contact