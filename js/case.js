document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btn-case-plus').addEventListener('click', function () {
        let value = updateNumber(true, 'case-number-field');
        updateTotalPrice(value, 'case-total-price');
        updateCheckOutPrice();
        
    })

    document.getElementById('btn-case-minus').addEventListener('click', function () {
        let value = updateNumber(false, 'case-number-field');
        updateTotalPrice(value, 'case-total-price');
        updateCheckOutPrice();
    })
})