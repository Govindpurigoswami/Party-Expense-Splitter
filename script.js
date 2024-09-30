const totalAmount = document.getElementById('total-amount');
const people = document.getElementById('people');
const calculateBtn = document.getElementById('calculate');
const result = document.getElementById('result');

calculateBtn.addEventListener('click', function() {
    const amount = parseFloat(totalAmount.value);
    const numPeople = parseInt(people.value);

    if (amount > 0 && numPeople > 0) {
        const split = (amount / numPeople).toFixed(2);
        result.textContent = `Each person should pay: ₹${split}`;
    } else {
        result.textContent = 'Please enter valid inputs.';
    }
});

