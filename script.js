const products = [
  {
    id: 1,
    name: "Sneakers",
    price: 2500,
    image: "clarks.png"
  },
  {
    id: 2,
    name: "Hoodie",
    price: 1500,
    image: "hoodie.png"
  },
  {
    id: 3,
    name: "Watch",
    price: 3500,
    image: "watches.png"
  },
  {
    id: 4,
    name: "Boxers",
    price: 900,
    image: "boxers.png"
  }
];

const productList = document.getElementById("product-list");

function displayProducts() {
  productList.innerHTML = ""; // clear first

  products.forEach(product => {
    productList.innerHTML += `
      <div class="product">
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>KES ${product.price}</p>
        <button onclick="addToCart(${product.id})">
          Add to Cart
        </button>
      </div>
    `;
  });
}

displayProducts();

let cart = [];
let cartCount = document.getElementById("cart-count");

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);

  cartCount.textContent = cart.length;

  alert(product.name + " added to cart!");
}

