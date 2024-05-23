document.addEventListener('DOMContentLoaded', function () {
    // Add event listeners to all remove icons
    document.querySelectorAll('.remove-item').forEach(function (removeBtn) {
        removeBtn.addEventListener('click', function () {
            // Find the cart item to remove
            const cartItem = removeBtn.closest('.cart-item');
            // Remove the cart item from the DOM
            cartItem.remove();
            // Update the checkout prices
            updateCheckOutPrice();
        });
    });
});
