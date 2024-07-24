export default async function order(req, res) {
    try {
        const { paymentDetails, cart } = JSON.parse(req.body);

        // Step 1: Prepare cart details array
        const cartDetails = cart.map(cartItem => ({
            "product_id": cartItem.id,
            "quantity": cartItem.quantity  // Assuming each cart item has a quantity property
        }));

        // Step 2: Prepare order details object
        const orderDetails = {
            "payment_method": "cashfree",
            "payment_method_title": "Cashfree",
            "set_paid": true,
            "billing": {
                "first_name": paymentDetails.fullName.split(" ")[0],
                "last_name": paymentDetails.fullName.split(" ")[1] || "", // Handle cases where last name might be missing
                "email": paymentDetails.email,
                "phone": paymentDetails.phoneNumber
            },
            "shipping": {
                "first_name": paymentDetails.receiverName.split(" ")[0],
                "last_name": paymentDetails.receiverName.split(" ")[1] || "", // Handle cases where last name might be missing
                "address_1": paymentDetails.addressLine,
                "city": paymentDetails.city,
                "state": paymentDetails.city, // Assuming state is the same as city
                "postcode": paymentDetails.zipCode,
                "country": "UAE",
                "email": paymentDetails.receiverEmail,
                "phone": paymentDetails.receiverPhone // Corrected to receiverPhone
            },
            "line_items": cartDetails, // Include cart items here
            "shipping_lines": [
                {
                    "method_id": "flat_rate",
                    "method_title": "Flat Rate",
                    "total": "29.00"
                }
            ],
            "meta_data": [
                {
                    "key": "_shipping_phone",
                    "value": paymentDetails.receiverPhone
                },
                {
                    "key": "delivery_date",
                    "value": paymentDetails.deliveryDate
                }
            ]
        };

        // Step 3: Make API call to create the order
        const key = "ck_49e1bda9eb68018ca0521c6f89d4d6eb05302a4f";
        const secret = "cs_54ac72ff68ce4fa700fb4eba53ee5303fbfe1b61";

        const orderResponse = await fetch("https://admin.gulfflora.ae/wp-json/wc/v3/orders", {
            method: "POST",
            headers: {
                "Authorization": "Basic " + btoa(`${key}:${secret}`),
                "Content-Type": "application/json"
            },
            body: JSON.stringify(orderDetails)
        });

        const order = await orderResponse.json();

        if (order.id) {
            const cashfreeSessionResponse = await fetch("http://gulfflora.ae/api/cashfree/order", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    amount: order.total,
                    currency: "INR",
                    customer_name: `${order.billing.first_name} ${order.billing.last_name}`,
                    customer_email: order.billing.email,
                    customer_phone: order.billing.phone
                })
            });

            const cashfreeSession = await cashfreeSessionResponse.json();
            res.status(200).json({ cashfreeSession });
        } else {
            res.status(400).json({ error: "Something went wrong while creating the order." });
        }
    } catch (error) {
        res.status(500).json({ error: "Failed to create order" });
    }
}