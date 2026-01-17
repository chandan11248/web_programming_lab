const products = [
    { id: 1, name: "Laptop", price: 800 },
    { id: 2, name: "Headphones", price: 50 },
    { id: 3, name: "Mouse", price: 20 },
    { id: 4, name: "Keyboard", price: 40 }
];

let cart = [];

function displayProducts() {
    const productList = document.getElementById('productList');

    for (let i = 0; i < products.length; i++) {
        const product = products[i];

        const div = document.createElement('div');
        div.classList.add('product-item');

        div.innerHTML = `
            <span>${product.name} - $${product.price}</span>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;

        productList.appendChild(div);
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
}

function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);

    if (index !== -1) {
        if (cart[index].quantity > 1) {
            cart[index].quantity--;
        } else {
            cart.splice(index, 1);
        }
    }

    updateCartUI();
}

function updateCartUI() {
    const cartList = document.getElementById('cartList');
    const totalPriceElement = document.getElementById('totalPrice');

    cartList.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartList.innerHTML = '<p>Cart is empty</p>';
    } else {
        for (let i = 0; i < cart.length; i++) {
            const item = cart[i];
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            const div = document.createElement('div');
            div.classList.add('cart-item');

            div.innerHTML = `
                <span>${item.name} (x${item.quantity})</span>
                <span>$${itemTotal}</span>
                <button class="remove" onclick="removeFromCart(${item.id})">Remove</button>
            `;

            cartList.appendChild(div);
        }
    }

    totalPriceElement.innerText = total;
}

displayProducts();
