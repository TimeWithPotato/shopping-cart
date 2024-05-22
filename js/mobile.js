document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn-mobile-plus').addEventListener('click', function () {
        let value = updateNumber(true, 'mobile-number-field');
        let value2 = updateTotalPrice(value, 'mobile-total-price');
        updateCheckOutPrice(true, value2);
        
    })

    document.getElementById('btn-mobile-minus').addEventListener('click', function () {
        let value = updateNumber(false, 'mobile-number-field');
        let value2 = updateTotalPrice(value, 'mobile-total-price');
        updateCheckOutPrice(false, value2);
    })
})