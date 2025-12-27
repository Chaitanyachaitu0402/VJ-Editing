const services = [
  "Wedding Teaser Video (Gold)",
  "Wedding Teaser Video (Silver)",
  "Surprise Reveal Vertical (Basic)",
  "Surprise Reveal Vertical (Classic)",
  "Cinematic Birthday(Kids)",
  "Regular Birthday(kids)",
  "Regular Birthday(adult)",
  "Memory Video",
  "Half saree Video",
  "13 Day Function Video",
  "Cradle",
  "25th anniversary",
  "Sreemantam ",
  "Name reveal",
  "AI Name reveal",
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const grid = document.getElementById("servicesGrid");
if (grid) {
  services.forEach(name => {
    grid.innerHTML += `
      <div class="service-card">
        <img src="https://via.placeholder.com/400x250">
        <h3>${name}</h3>
        <p>High-end creative editing service</p>
        <button onclick="addToCart('${name}')">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(name) {
  const item = cart.find(i => i.name === name);
  if (item) item.qty++;
  else cart.push({ name, price: 350, qty: 1 });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = cart.reduce((a,b) => a + b.qty, 0);
  const el = document.getElementById("cartCount");
  if (el) el.innerText = count;
}

function checkoutWhatsApp() {
  let msg = "Hi VJ Edit Point 👋\n\nI would like to place an order:\n\n";
  let total = 0;

  cart.forEach((i, idx) => {
    msg += `${idx+1}. ${i.name}\n   Quantity: ${i.qty}\n   Price: ₹${i.price * i.qty}\n\n`;
    total += i.price * i.qty;
  });

  msg += `--------------------\nTotal Amount: ₹${total}\n\nPlease let me know the next steps.`;

  window.open(`https://wa.me/919014750705?text=${encodeURIComponent(msg)}`);
}

updateCartCount();
