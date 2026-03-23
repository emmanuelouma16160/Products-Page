const products = [

  {
    id: 1,
    name: "Hoodie",
    price: 1500,
    image: "hoodie.png"
  },
  {
    id: 2,
    name: "Watch",
    price: 3500,
    image: "watches.png"
  },
   {
    id: 3,
    name: "suit",
    price: 5500,
    image: "suit.png"
  },
   {
    id: 4,
    name: "Nike shoes",
    price: 6000,
    image: "shoes.jpeg"
  },
   {
    id: 5,
    name: "speaker",
    price: 40000,
    image: "speaker.png"
  },
   {
    id: 6,
    name: "iphone 17 pro max",
    price: 152500,
    image: "iphone 17 pro max.png"
  },
  {  id: 12,
    name: "Boxers",
    price: 900,
    image: "boxer.png"
  },
   {
    id: 7,
    name: "Clarks",
    price: 2500,
    image: "clarks.png"
  },
    {
    id: 7,
    name: "Clarks",
    price: 2500,
    image: "clarks.png"
  },
  
   {
    id: 9,
    name: "Nike shoes",
    price: 4500,
    image: "Nike air.jpeg"
  },
   {
    id: 10,
    name: "NIke shoes",
    price: 5500,
    image: "nike blue.jpeg"
  },
   {
    id: 11,
    name: "Nike shoes",
    price: 3500,
    image: "nike black.jpeg"
  },
   {
    id: 7,
    name: "Clarks",
    price: 2500,
    image: "clarks.png"
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

// local storage

function saveData() {
    localStorage.setItem("data", productList.innerHTML);
}