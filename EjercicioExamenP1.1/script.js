


function calculateDiscount() {
    let product1 = parseFloat(document.getElementById('product1').value) || 0;
    let product2 = parseFloat(document.getElementById('product2').value) || 0;
    let product3 = parseFloat(document.getElementById('product3').value) || 0;
    let product4 = parseFloat(document.getElementById('product4').value) || 0;
    let product5 = parseFloat(document.getElementById('product5').value) || 0;

    let subtotal = product1 + product2 + product3 + product4 + product5;
    let discount = 0;
    let discountLabel = 'Tiene Descuento del 0%';

    if (subtotal >= 1000 && subtotal < 5000) {
        discount = 0.10;
        discountLabel = 'Tiene Descuento del 10%';
    } else if (subtotal >= 5000 && subtotal < 9000) {
        discount = 0.20;
        discountLabel = 'Tiene Descuento del 20%';
    } else if (subtotal >= 9000 && subtotal < 13000) {
        discount = 0.30;
        discountLabel = 'Tiene Descuento del 30%';
    } else if (subtotal >= 13000) {
        discount = 0.40;
        discountLabel = 'Tiene Descuento del 40%';
    }

    let discountAmount = subtotal * discount;
    let total = subtotal - discountAmount;

    document.getElementById('subtotal').value = subtotal.toFixed(2);
    document.getElementById('discountLabel').innerText = discountLabel;
    document.getElementById('discount').value = discountAmount.toFixed(2);
    document.getElementById('total').value = total.toFixed(2);

    // mis validaciones
    if (isNaN(subtotal) || subtotal === 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, ingrese valores numéricos válidos en todos los campos.',
        });
        resetForm();
    }
}

function resetForm() {
    document.getElementById('discountForm').reset();
    document.getElementById('subtotal').value = '';
    document.getElementById('discountLabel').innerText = 'Descuento 0%';
    document.getElementById('discount').value = '';
    document.getElementById('total').value = '';
}
