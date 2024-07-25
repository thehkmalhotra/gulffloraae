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
            "payment_method": "razorpay",
            "payment_method_title": "Razorpay",
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
    } catch (error) {
        res.status(500).json({ error: "Failed to create order" });
    }
}