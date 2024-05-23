function updateNumber(flag, inputId) {
    const element = document.getElementById(inputId);
    let elementValue = parseInt(element.value);
    if (flag) {
        element.value = elementValue + 1;
    } else {
        if (elementValue == 0) {
            element.value = 0;
        } else {
            element.value = elementValue - 1;
        }
    }
    return parseInt(element.value);
}

function updateTotalPrice(value, totalPriceId) {
    const element = document.getElementById(totalPriceId);
    if (totalPriceId == 'case-total-price') {
        element.innerText = value * 59;
        return value * 59;
    } else if (totalPriceId == 'mobile-total-price') {
        element.innerText = value * 1219;
        return value * 1219;
    }
}

function updateCheckOutPrice() {
    const subtotal = document.getElementById('subtotal');
    const caseElement = document.getElementById('case-total-price');
    const mobileElement = document.getElementById('mobile-total-price');
    
    const caseInnerText = caseElement ? parseInt(caseElement.innerText) : 0;
    const mobileInnerText = mobileElement ? parseInt(mobileElement.innerText) : 0;
    
    const totalPrice = caseInnerText + mobileInnerText;
    subtotal.innerText = totalPrice;

    const tax = document.getElementById('tax');
    tax.innerText = (totalPrice * 0.1).toFixed(2);
    
    const total = document.getElementById('total');
    total.innerText = Math.round((totalPrice + totalPrice * 0.1).toFixed(2));
}
