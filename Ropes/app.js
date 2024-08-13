document.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add event listeners to all "Add to Cart" buttons
    document.querySelectorAll('.btn-primary').forEach(button => {
        button.addEventListener('click', () => {
            // Find the closest card element and extract product details
            const card = button.closest('.card');
            const product = {
                id: card.querySelector('img').getAttribute('src'), // Assuming image source as product ID
                name: card.querySelector('.card-title').textContent,
                price: card.querySelector('.card-text').textContent.replace('$', '')
            };

            // Add the product to the cart
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
            alert(`${product.name} has been added to the cart!`);
        });
    });

    // Example function to display cart contents in the console
    // You can replace this with actual cart rendering code if needed
    function displayCart() {
        console.log('Cart contents:', cart);
    }

    displayCart(); // Call to display the cart contents when the page loads
});
s