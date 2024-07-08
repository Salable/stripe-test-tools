
var billingCountry = document.getElementById('billingCountry');
if (billingCountry) {
    billingCountry.value = 'US';
}

var billingPostalCode = document.getElementById('billingPostalCode');
if (billingPostalCode) {
    billingPostalCode.value = '36330';
    let event = new Event('input', { bubbles: true, cancelable: true });
    billingPostalCode.dispatchEvent(event);
}

var cardInput = document.getElementById('cardNumber');
if (cardInput) {
    cardInput.focus();
    cardInput.value = 4242424242424242;
    let event = new Event('input', { bubbles: true, cancelable: true });
    cardInput.dispatchEvent(event);
}

var cardExpiry = document.getElementById('cardExpiry');
if (cardExpiry) {
    cardExpiry.value = '1234';
    let event = new Event('input', { bubbles: true, cancelable: true });
    cardExpiry.dispatchEvent(event);
}

var cardCvc = document.getElementById('cardCvc');
if (cardCvc) {
    cardCvc.value = '123';
    let event = new Event('input', { bubbles: true, cancelable: true });
    cardCvc.dispatchEvent(event);
}

var billingName = document.getElementById('billingName');
if (billingName) {
    billingName.value = 'Marvin Android';
    let event = new Event('input', { bubbles: true, cancelable: true });
    billingName.dispatchEvent(event);
}



