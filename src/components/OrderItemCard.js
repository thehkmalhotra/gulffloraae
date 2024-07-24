const OrderItemCard = (props) => {
    const handleRemove = () => {
        props.handleRemoveCartItem(props.name);
    };
    return (
        <>
            <div className="order-item" key={props.name}>
                <img src={props.image} />
                <div className="order-item-details">
                    <h4>{props.name}</h4>
                    <p className="order-item-total active">{props.total}ر.س</p>
                    <div className="order-item-actions">
                        <div className="quantity">
                            {props.quantity}
                            <svg width="8" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.5 1.14286L3.5 3.71429L0.5 1.14286" stroke="#221122" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <button className="remove-item" data-item-name={props.name} onClick={handleRemove}>
                            <svg width="14" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_426_94)">
                                    <path d="M0.666748 3.79893H11.3334" stroke="#B71029" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.1479 3.79895V12.0952C10.1479 12.4096 10.023 12.711 9.80074 12.9333C9.57847 13.1556 9.277 13.2804 8.96267 13.2804H3.03675C2.72242 13.2804 2.42096 13.1556 2.1987 12.9333C1.97643 12.711 1.85156 12.4096 1.85156 12.0952V3.79895M3.62934 3.79895V2.61376C3.62934 2.29943 3.75421 1.99797 3.97648 1.77571C4.19874 1.55344 4.5002 1.42857 4.81453 1.42857H7.18487C7.4992 1.42857 7.80067 1.55344 8.02294 1.77571C8.2452 1.99797 8.37007 2.29943 8.37007 2.61376V3.79895" stroke="#B71029" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_426_94">
                                        <rect width="12" height="13.3333" fill="white" transform="translate(0 0.761906)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            Remove
                        </button>
                    </div>
                </div>
                <p className="order-item-total">{props.total}ر.س</p>
            </div>

            <style jsx>{`
                .order-item {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    gap: 20px;
                }

                .order-item img {
                    width: 80px;
                    height: 80px;
                    margin: auto 0;
                }

                .order-item-details {
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }

                @media screen and (max-width: 767px){
                    .order-item-details {
                        width: 100%;
                    }
                }

                .order-item-details h4 {
                    width: 80%;
                    font-family: "Bricolage Grotesque";
                    font-weight: 500;
                    font-size: 16px;
                    color: #212121;
                }

                 @media screen and (max-width: 767px){
                    .order-item-details h4 {
                        width: 100%;
                        font-family: "Bricolage Grotesque";
                        font-weight: 600;
                        font-size: 18px;
                        color: #212121;
                    }
                }

                .order-item-actions {
                    display: flex;
                    gap: 20px;
                }

                .quantity {
                    height: 40px;
                    width: 100px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 10px;
                    background-color: #21212110;
                    border-radius: 10px;
                    padding: 0 15px;
                    font-family: "Bricolage Grotesque";
                    font-size: 14px;
                }

                .remove-item {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    background-color: transparent;
                    border: none;
                    outline: none;
                    color: #B71029;
                    font-family: "Bricolage Grotesque";
                    font-weight: 400;
                    font-size: 14px;
                    cursor: pointer;
                }
                
                .order-item-total {
                    font-family: "Bricolage Grotesque";
                    font-weight: 400;
                    font-size: 15px;
                    color: #486857;
                }

                @media screen and (max-width: 767px){
                    .order-item-total {
                        font-weight: 500;
                        display: none;
                    }
                }

                .order-item-total.active {
                    display: block;
                    margin-top: -10px
                }
            `}</style>
        </>
    )
}

export default OrderItemCard;