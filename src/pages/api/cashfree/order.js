export default async function cashfreeorder(req, res) {
    const clientId = "TEST10199614053018714f75c427cb7c41699101";
    const clientSecret = "cfsk_ma_test_e88855d8753d297fbcf21272f67cf052_60dbbab9";
    const { amount, currency, customer_name, customer_email, customer_phone, orderId } = req.body;
    const orderDetails = {
        "customer_details": {
            "customer_id": customer_name.replace(" ",""),
            "customer_name": customer_name,
            "customer_email": customer_email,
            "customer_phone": customer_phone
        },
        "order_id": orderId,
        "order_currency": currency,
        "order_amount": amount
    };

    const cashfreeOrderResponse = await fetch("https://sandbox.cashfree.com/pg/orders", {
        method: "POST",
        headers: {
            "accept": "application/json",
            "content-type": "application/json",
            "x-api-version": "2023-08-01",
            "x-client-id": clientId,
            "x-client-secret": clientSecret
        },
        body: JSON.stringify(orderDetails)
    })
    const cashfreeOrder = await cashfreeOrderResponse.json();
    res.status(200).json(cashfreeOrder);
}