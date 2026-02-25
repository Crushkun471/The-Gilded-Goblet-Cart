// 1. DATA: Added Descriptions for the hover effect
const inventory = [
    { id: 1, name: "Iron Sword", price: 80, stock: 10, category: "Weapon", image: "images/ironsword.jpg", description: "A standard-issue blade, reliable in any skirmish." },
    { id: 2, name: "Health Potion", price: 10, stock: 25, category: "Consumable", image: "images/health-potion.jpg", description: "Restores vital energy. Tastes like wild berries." },
    { id: 3, name: "Mana Potion", price: 15, stock: 20, category: "Consumable", image: "images/mana-potion.jpg", description: "Refills your magical reserves instantly." },
    { id: 4, name: "Agility Potion", price: 15, stock: 20, category: "Consumable", image: "images/agility-potion.jpg", description: "Move like the wind for a short duration." },
    { id: 41, name: "Helmet of Aegis", price: 150, stock: 2, category: "Armor", image: "images/armor-helmet.jpg", description: "Part of the Aegis set. Protects the mind and head." },
    { id: 5, name: "Armor Plate of Aegis", price: 190, stock: 2, category: "Armor", image: "images/armor-bodyplate.avif", description: "Heavy plating designed to deflect heavy blows." },
    { id: 6, name: "Magic Ring of Power", price: 250, stock: 1, category: "Accessory", image: "images/magic-ring.jpg", description: "Increases strength tenfold, but feels heavy." },
    { id: 7, name: "Magic Ring of Invinsibility", price: 300, stock: 1, category: "Accessory", image: "images/invensible-ring.jpg", description: "Disappear from sight. Great for stealth." },
    { id: 8, name: "Magic Staff of Wisdom", price: 400, stock: 1, category: "Weapon", image: "images/magic-staff.jpg", description: "A conduit for ancient and powerful spells." },
    { id: 9, name: "Magic Scroll of Healing", price: 150, stock: 5, category: "Consumable", image: "images/magic-scroll.webp", description: "One-time use scroll to mend deep wounds." },
    { id: 10, name: "Magic Scroll of Fire", price: 200, stock: 3, category: "Consumable", image: "images/fire-scroll.webp", description: "Incinerate your foes with a single word." },
    { id: 11, name: "Magic Scroll of Ice", price: 200, stock: 3, category: "Consumable", image: "images/ice-scroll.png", description: "Freeze everything in a 10-foot radius." },
    { id: 12, name: "Magic Scroll of Lightning", price: 250, stock: 2, category: "Consumable", image: "images/Scroll_lightning.webp", description: "Call down the wrath of the heavens." },
    { id: 13, name: "Ak-47", price: 380, stock: 5, category: "Weapon", image: "images/ak47-gun.jpg", description: "The world's most popular assault rifle." },
    { id: 14, name: "MK16", price: 360, stock: 5, category: "Weapon", image: "images/mk16-gun.jpg", description: "Highly modular and accurate tactical rifle." },
    { id: 15, name: "M4 Carbine6", price: 340, stock: 5, category: "Weapon", image: "images/m4-carbine6.jpg", description: "Standard issue for modern special forces." },
    { id: 16, name: "FAMAS", price: 350, stock: 5, category: "Weapon", image: "images/famas.jpg", description: "French bullpup design with a high rate of fire." },
    { id: 17, name: "FN SCAR", price: 330, stock: 5, category: "Weapon", image: "images/fn-scar.jpg", description: "Reliable, robust, and deadly at range." },
    { id: 18, name: "Steyr AUG", price: 365, stock: 5, category: "Weapon", image: "images/steyr-aug.jpg", description: "Austrian bullpup rifle with an integrated optic." },
    { id: 19, name: "HK416", price: 360, stock: 5, category: "Weapon", image: "images/hk416.jpg", description: "The elite's choice for a tactical carbine." },
    { id: 20, name: "Barret", price: 900, stock: 5, category: "Weapon", image: "images/barret.jpg", description: "Anti-material sniper rifle. Stops tanks." },
    { id: 21, name: "Dragunov SVD", price: 450, stock: 5, category: "Weapon", image: "images/DragunovSVD.jpg", description: "Classical Soviet semi-auto sniper rifle." },
    { id: 22, name: "M24", price: 690, stock: 5, category: "Weapon", image: "images/M24.jpg", description: "The legendary bolt-action sniper system." },
    { id: 23, name: "AWM", price: 660, stock: 5 , category: "Weapon", image: "images/AWM.jpg", description: "Arctic Warfare Magnum. Built for one-shot kills." },
    { id: 24, name: "CheyTac M200", price: 630, stock: 5, category: "Weapon", image: "images/CheyTacM200.jpg", description: "Intervention rifle for extreme long-range shots." },
    { id: 25, name: "MP5", price: 250, stock: 5, category: "Weapon", image: "images/MP5.jpg", description: "The most iconic submachine gun in history." },
    { id: 26, name: "Uzi", price: 300, stock: 5, category: "Weapon", image: "images/Uzi.jpg", description: "Compact firepower for close-quarters battle." },
    { id: 27, name: "P90", price: 300, stock: 5, category: "Weapon", image: "images/P90.jpg", description: "Unique magazine and high armor penetration." },
    { id: 28, name: "Vector", price: 300, stock: 5, category: "Weapon", image: "images/Vector.jpg", description: "Super V recoil system for extreme stability." },
    { id: 29, name: "MAC-10", price: 300, stock: 5, category: "Weapon", image: "images/MAC-10.jpg", description: "A simple, fast-firing spray-and-pray SMG." },
    { id: 30, name: "RPG-7", price: 300, stock: 5, category: "Weapon", image: "images/RPG-7.jpg", description: "The classic rocket-propelled grenade launcher." },
    { id: 31, name: "RPG-29", price: 300, stock: 5, category: "Weapon", image: "images/RPG-29.jpg", description: "Vampir rocket designed to punch through reactive armor." },
    { id: 32, name: "RPG-M72 LAW", price: 300, stock: 5, category: "Weapon", image: "images/M72 LAW.jpg", description: "Lightweight, disposable anti-tank weapon." },
    { id: 33, name: "AT4", price: 300, stock: 5, category: "Weapon", image: "images/AT4.jpg", description: "Swedish 84mm unguided anti-armor weapon." },
    { id: 34, name: "Glock 17", price: 300, stock: 5, category: "Weapon", image: "images/Glock 17.jpg", description: "Plastic fantastic. Reliable and simple." },
    { id: 35, name: "M1911", price: 300, stock: 5, category: "Weapon", image: "images/M1911.jpg", description: "Old school .45 caliber stopping power." },
    { id: 36, name: "Beretta M9", price: 300, stock: 5, category: "Weapon", image: "images/Beretta M9.jpg", description: "Standard sidearm with a 15-round capacity." },
    { id: 37, name: "Desert Eagle", price: 350, stock: 5, category: "Weapon", image: "images/Desert Eagle.webp", description: "Hand cannon. Loud, heavy, and terrifying." },
    { id: 38, name: "SIG Sauer P226", price: 350, stock: 5, category: "Weapon", image: "images/SIG Sauer P226.jpg", description: "The choice of Navy SEALs for decades." },
    { id: 39, name: "MRE", price: 120, stock: 5, category: "Consumable", image: "images/MRE.jpg", description: "Meal Ready-to-Eat. Keeps you fighting." },
    { id: 40, name: "M67 grenade", price: 100, stock: 5, category: "Consumable", image: "images/M67 grenade.jpg", description: "Fragmentary explosive. Clear the room." },
    { id: 41, name: "F1 grenade", price: 100, stock: 5, category: "Consumable", image: "images/F1 grenade.jpg", description: "Defensive grenade with heavy shrapnel." },
    { id: 42, name: "M18 smoke grenade", price: 100, stock: 5, category: "Consumable", image: "images/M18 smoke grenade.jpg", description: "Conceal your movement from the enemy." },
    { id: 43, name: "Dell battery", price: 450, stock: 5, category: "Consumable", image: "images/Dell battery.jpg", description: "Power up your electronics." },
    { id: 44, name: "Dell charger", price: 600, stock: 5, category: "Consumable", image: "images/Dell charger.jpg", description: "Power up your electronics." },
    { id: 45, name: "Can opener", price: 600, stock: 5, category: "Consumable", image: "images/Can opener.jpg", description: "Open cans with ease." },
    { id: 46, name: "Light bulb", price: 100, stock: 5, category: "Consumable", image: "images/Light bulb.jpg", description: "Provides illumination in dark places." },
    { id: 47, name: "Bed", price: 260, stock: 5, category: "Consumable", image: "images/Bed.jpg", description: "Rest and recover your health." },
    { id: 48, name: "Water dispenser", price: 80, stock: 5, category: "Consumable", image: "images/Water dispenser.jpg", description: "Provides clean drinking water." },
    { id: 49, name: "Dell laptop", price: 800, stock: 5, category: "Consumable", image: "images/Dell laptop.jpg", description: "A reliable laptop for your needs." },
    { id: 50, name: "DDR4 16gb", price: 800, stock: 5, category: "Consumable", image: "images/DDR4 16gb.jpg", description: "A reliable RAM for your needs." },
];

// 2. STATE
let playerGold = parseInt(localStorage.getItem('playerGold')) || 1000;
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// 3. CORE FUNCTIONS
function renderShop() {
    const shopFloor = document.getElementById('shop-floor');
    const searchTerm = document.getElementById('shop-search')?.value.toLowerCase() || ""; 
    shopFloor.innerHTML = '';

    const filteredInventory = inventory.filter(item => 
        item.name.toLowerCase().includes(searchTerm) || 
        item.category.toLowerCase().includes(searchTerm)
    );

    if (filteredInventory.length === 0) {
        shopFloor.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--gold);">No loot matches your search, traveler.</p>`;
        return;
    }

    filteredInventory.forEach(item => {
        const inCart = cart.find(c => c.id === item.id);
        const displayStock = item.stock - (inCart ? inCart.quantity : 0);

        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `
            <img src="${item.image}" class="item-image" onerror="this.src='https://via.placeholder.com/150?text=No+Image'">
            <h3>${item.name}</h3>
            <p>${item.price}G</p>
            
            <div class="item-description">
                <p>${item.description || "A mysterious item of unknown origin."}</p>
            </div>

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
        entry.className = 'cart-item';
        entry.innerHTML = `
            <span>${item.name} x${item.quantity}</span>
            <div>
                <button onclick="changeQuantity(${item.id}, -1)">-</button>
                <button onclick="changeQuantity(${item.id}, 1)">+</button>
            </div>
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
    if (cart.length === 0) return;

    if (playerGold >= totalCost) {
        playerGold -= totalCost;
        cart.forEach(cartItem => {
            const invItem = inventory.find(i => i.id === cartItem.id);
            invItem.stock -= cartItem.quantity;
        });
        cart = [];
        updateGoldDisplay();
        renderShop();
        renderCart();
        alert("Purchase complete! The items are yours.");
    } else {
        alert("You lack the gold for such a bounty!");
    }
}

// Add a new state variable at the top
let orders = JSON.parse(localStorage.getItem('orders')) || [];

function checkout() {
    const totalCost = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cart.length === 0) return;

    if (playerGold >= totalCost) {
        playerGold -= totalCost;
        
        // --- NEW: Create Order Tracking Entry ---
        const orderId = "#" + Math.floor(Math.random() * 9000 + 1000);
        const newOrder = {
            id: orderId,
            items: cart.map(i => i.name).join(", "),
            status: "Awaiting Caravan",
            date: new Date().toLocaleTimeString()
        };
        orders.push(newOrder);
        // ---------------------------------------

        cart.forEach(cartItem => {
            const invItem = inventory.find(i => i.id === cartItem.id);
            invItem.stock -= cartItem.quantity;
        });
        
        cart = [];
        updateGoldDisplay();
        renderShop();
        renderCart();
        renderOrders(); // Update the tracking list
        alert("Purchase complete! Tracking ID: " + orderId);
    } else {
        alert("You lack the gold!");
    }
}

function renderOrders() {
    const orderList = document.getElementById('order-list');
    if (!orderList) return;
    
    if (orders.length === 0) {
        orderList.innerHTML = `<p style="font-size: 0.8rem; opacity: 0.5;">No active shipments...</p>`;
        return;
    }

    orderList.innerHTML = orders.map(order => `
        <div class="order-card">
            <strong>Order ${order.id}</strong><br>
            <small>${order.items.substring(0, 30)}...</small><br>
            <span class="status-tag">🛡️ ${order.status}</span>
        </div>
    `).join('');
    
    localStorage.setItem('orders', JSON.stringify(orders));
}

// Update window.onload to include renderOrders()
window.onload = () => {
    updateGoldDisplay();
    renderShop();
    renderCart();
    renderOrders();
};

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

// 1. Function to toggle the theme
function toggleTheme() {
    const isChecked = document.getElementById('checkbox').checked;
    
    if (isChecked) {
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
    }
}

// 2. Load the saved theme when the page opens
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const checkbox = document.getElementById('checkbox');
    
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        checkbox.checked = true;
    }
}

// Add loadTheme() to your existing window.onload
window.onload = () => {
    loadTheme(); // <-- Add this!
    updateGoldDisplay();
    renderShop();
    renderCart();
    renderOrders();
};