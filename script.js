// 1. DATA: Our "Database"
const inventory = [
    { id: 1, name: "Iron Sword", price: 50, stock: 10, category: "Weapon" },
    { id: 2, name: "Health Potion", price: 10, stock: 25, category: "Consumable" },
    { id: 3, name: "Shield of Aegis", price: 150, stock: 2, category: "Armor" },
    { id: 4, name: "Dragon Scale Mail", price: 500, stock: 1, category: "Armor" }
];

// 2. STATE: Initialize variables from LocalStorage or defaults
let playerGold = parseInt(localStorage.getItem('playerGold')) || 250;
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// 3. CORE FUNCTIONS
function renderShop() {
    const shopFloor = document.getElementById('shop-floor');
    shopFloor.innerHTML = '';

    inventory.forEach(item => {
        // Calculate current available stock based on what's in the cart
        const inCart = cart.find(c => c.id === item.id);
        const displayStock = item.stock - (inCart ? inCart.quantity : 0);

        const card = document.createElement('div');
        card.style.border = "1px solid #333";
        card.style.padding = "10px";
        card.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: ${item.price}G</p>
            <p>Available: ${displayStock}</p>
            <button onclick="addToCart(${item.id})" ${displayStock <= 0 ? 'disabled' : ''}>
                ${displayStock > 0 ? 'Add to Pouch' : 'Sold Out'}
            </button>
        `;
        shopFloor.appendChild(card);
    });
}

function renderCart() {
    const cartList = document.getElementById('cart-list');
    const totalDisplay = document.getElementById('total-cost');
    cartList.innerHTML = '';
    
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        const entry = document.createElement('div');
        entry.innerHTML = `
            <p>
                <strong>${item.name}</strong> x${item.quantity} - ${item.price * item.quantity}G
                <button onclick="changeQuantity(${item.id}, -1)">➖</button>
                <button onclick="changeQuantity(${item.id}, 1)">➕</button>
            </p>
        `;
        cartList.appendChild(entry);
    });

    totalDisplay.innerText = total;
    saveData();
}

function addToCart(itemId) {
    const item = inventory.find(i => i.id === itemId);
    const cartItem = cart.find(c => c.id === itemId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    
    renderShop();
    renderCart();
}

function changeQuantity(itemId, amount) {
    const cartItem = cart.find(c => c.id === itemId);
    const originalItem = inventory.find(i => i.id === itemId);

    if (cartItem) {
        if (amount > 0 && cartItem.quantity < originalItem.stock) {
            cartItem.quantity++;
        } else if (amount < 0) {
            cartItem.quantity--;
        }

        if (cartItem.quantity <= 0) {
            cart = cart.filter(c => c.id !== itemId);
        }
    }
    renderShop();
    renderCart();
}

function checkout() {
    const totalCost = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (cart.length === 0) return alert("Your pouch is empty!");

    if (playerGold >= totalCost) {
        playerGold -= totalCost;
        // Permanently reduce stock in our "session inventory"
        cart.forEach(cartItem => {
            const invItem = inventory.find(i => i.id === cartItem.id);
            invItem.stock -= cartItem.quantity;
        });
        cart = [];
        alert("Purchase complete! The items are yours.");
        updateGoldDisplay();
        renderShop();
        renderCart();
    } else {
        alert("You lack the gold for such a bounty!");
    }
}

function clearCart() {
    cart = [];
    renderShop();
    renderCart();
}

function updateGoldDisplay() {
    document.getElementById('gold-display').innerText = playerGold;
}

function saveData() {
    localStorage.setItem('playerGold', playerGold);
    localStorage.setItem('cart', JSON.stringify(cart));
}

// 4. INIT
window.onload = () => {
    updateGoldDisplay();
    renderShop();
    renderCart();
};