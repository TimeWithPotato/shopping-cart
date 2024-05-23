document.addEventListener('DOMContentLoaded', function () {
    const { jsPDF } = window.jspdf;

    document.getElementById('checkout-btn').addEventListener('click', function () {
        const pdf = new jsPDF();

        // Title
        pdf.setFontSize(18);
        pdf.text('Shopping Cart Invoice', 10, 10);

        // Add date
        pdf.setFontSize(12);
        pdf.text(`Date: ${new Date().toLocaleDateString()}`, 10, 20);

        // Add items
        let startY = 30;

        // iPhone details
        const iphoneQuantity = document.getElementById('mobile-number-field').value;
        const iphonePrice = document.getElementById('mobile-total-price').innerText;

        if (parseInt(iphoneQuantity) > 0) {
            pdf.text(`iPhone 11 128GB Black - Quantity: ${iphoneQuantity} - Total: $${iphonePrice}`, 10, startY);
            startY += 10;
        }

        // Case details
        const caseQuantity = document.getElementById('case-number-field').value;
        const casePrice = document.getElementById('case-total-price').innerText;

        if (parseInt(caseQuantity) > 0) {
            pdf.text(`iPhone 11 Silicone Case - Quantity: ${caseQuantity} - Total: $${casePrice}`, 10, startY);
            startY += 10;
        }

        // Subtotal, Tax, and Total
        const subtotal = document.getElementById('subtotal').innerText;
        const tax = document.getElementById('tax').innerText;
        const total = document.getElementById('total').innerText;

        pdf.text(`Subtotal: $${subtotal}`, 10, startY + 10);
        pdf.text(`Tax: $${tax}`, 10, startY + 20);
        pdf.text(`Total: $${total}`, 10, startY + 30);

        // Save the PDF
        pdf.save('invoice.pdf');
    });
});