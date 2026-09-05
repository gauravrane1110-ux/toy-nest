let cart = [];

function addToCart(name, price) {
  cart.push({name, price});
  document.getElementById("cartCount").textContent = cart.length;
  alert(name + " added to cart!");
}

function showCart() {
  const modal = document.getElementById("cartModal");
  const items = document.getElementById("cartItems");
  const total = document.getElementById("cartTotal");

  if (cart.length === 0) {
    items.innerHTML = "<p>Your cart is empty.</p>";
    total.textContent = "Total: ₹0";
  } else {
    let sum = 0;
    items.innerHTML = cart.map((item, index) => {
      sum += item.price;
      return `<div class="cart-row">
        <span>${index + 1}. ${item.name}</span>
        <b>₹${item.price}</b>
      </div>`;
    }).join("");
    total.textContent = "Total: ₹" + sum;
  }

  modal.style.display = "flex";
}

function closeCart() {
  document.getElementById("cartModal").style.display = "none";
}

function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Demo checkout: your order has been placed!");
  cart = [];
  document.getElementById("cartCount").textContent = "0";
  closeCart();
}

window.onclick = function(event) {
  const modal = document.getElementById("cartModal");
  if (event.target === modal) closeCart();
};
