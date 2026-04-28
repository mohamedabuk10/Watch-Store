import React from "react";

const products = [
  {
    name: "Classic Leather Watch",
    price: "$149",
    img: "https://cdn.ooulet.com/store-13874/product-images/1776877259700-scaled935725.jpg"
  },
  {
    name: "Silver Dial Watch",
    price: "$199",
    img: "https://cdn.ooulet.com/store-13874/product-images/1774855077831-scaled750360.jpg"
  },
  {
    name: "Minimal Black Watch",
    price: "$129",
    img: "https://cdn.ooulet.com/store-13874/product-images/1775026759833-scaled806704.jpg"
  },
  {
    name: "Luxury Gold Watch",
    price: "$299",
    img: "https://cdn.ooulet.com/store-13874/product-images/1764446685302-scaled1001878257.jpg"
  }
];

function Products() {
  return (
    <div className="products">
      <h2>Featured Watches</h2>
      <div className="product-grid">
        {products.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;