import url from "./URL";
export default async () => {
  const response = await fetch(`${url}/api/products?populate=*`);
  const products = await response.json();
  if (products.error) {
    return null;
  }
  return products.data.map((item) => {
    return {
      id: item.id,
      title: item.attributes.title,
      price: item.attributes.price,
      description: item.attributes.description,
      image: item.attributes.image.data.attributes,
      featured: item.attributes.featured,
    };
  });
};
