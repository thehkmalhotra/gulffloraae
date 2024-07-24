export default async function cart(req, res) {
    if (req.method === "GET") {
        const cartResponse = await fetch("https://admin.gulfflora.ae/wp-content/plugins/gulfflora/api/cart.php");
        const cart = await cartResponse.json();
        res.status(200).json({ cart });
    }
    else if (req.method === "POST") {
        const cartResponse = await fetch("https://admin.gulfflora.ae/wp-content/plugins/gulfflora/api/cart.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                product_id: req.body.product_id,
                quantity: req.body.quantity
            })
        });
        const cart = await cartResponse.json();
        res.status(200).json({ cart });
    }
}