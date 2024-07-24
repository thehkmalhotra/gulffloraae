export default async function categories(req, res) {
  const key = "ck_49e1bda9eb68018ca0521c6f89d4d6eb05302a4f";
  const secret = "cs_54ac72ff68ce4fa700fb4eba53ee5303fbfe1b61";

  const categoriesResponse = await fetch("https://admin.gulfflora.ae/wp-json/wc/v3/products/categories?per_page=100", {
    method: "GET",
    headers: {
      "Authorization": "Basic " + btoa(`${key}:${secret}`)
    }
  });
  const categories = await categoriesResponse.json();
  res.status(200).json(categories);
}