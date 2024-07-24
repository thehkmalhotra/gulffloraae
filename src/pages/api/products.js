export default async function products(req, res) {
  const key = "ck_49e1bda9eb68018ca0521c6f89d4d6eb05302a4f";
  const secret = "cs_54ac72ff68ce4fa700fb4eba53ee5303fbfe1b61";

  if(req.url) {
    var url = "https://admin.gulfflora.ae/wp-json/wc/v3/products/" + req.url.split("/api/products")[1];
  }
  else {
    var url = "https://admin.gulfflora.ae/wp-json/wc/v3/products/";
  }
  const productsResponse = await fetch(url,{
    method: "GET",
    headers: {
      "Authorization": "Basic " + btoa(`${key}:${secret}`)
    }
  });
  const products = await productsResponse.json();
  
  res.status(200).json({products});
}