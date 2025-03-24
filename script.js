document.addEventListener('DOMContentLoaded', function() {
    
    const body = document.querySelector('body');
    const themeButton = document.getElementById('theme-button');
    const amountSlider = document.getElementById('amount');
    const amountInput = document.getElementById("amount-input");
    const monthsSlider = document.getElementById('term');
    const monthsInput = document.getElementById("term-input");
    const monthlyPaymentDisplay = document.getElementById('monthly-payment');

    calculateMonthlyPayment();
    function updateValues(event) {
        if (event.target === amountSlider) {
            amountInput.value = amountSlider.value;
        } else if (event.target === amountInput) {
            amountSlider.value = amountInput.value;
        } else if (event.target === monthsSlider) {
            monthsInput.value = monthsSlider.value;
        } else if (event.target === monthsInput) {
            monthsSlider.value = monthsInput.value;
        }
        calculateMonthlyPayment();
    }

    amountSlider.addEventListener('input', updateValues);
    amountInput.addEventListener('input', updateValues);
    monthsSlider.addEventListener('input', updateValues);
    monthsInput.addEventListener('input', updateValues);

    calculateMonthlyPayment();

    function calculateMonthlyPayment(){
        const amountSlider = document.getElementById('amount');
        const termSlider = document.getElementById('term');

        const amount = parseInt(amountSlider.value);
        const term = parseInt(termSlider.value);

        const monthlyPayment = amount / term;
        monthlyPaymentDisplay.textContent = monthlyPayment.toFixed(2) + ' €';
        valueShake(monthlyPaymentDisplay)
    }

    amountSlider.addEventListener('input', function(){
        calculateMonthlyPayment();
    });

    monthsSlider.addEventListener('input', function(){
        calculateMonthlyPayment();
    });


    function valueShake(element) {
        element.classList.add('value-shake');
        setTimeout(() => {
            element.classList.remove('value-shake');
        }, 500);
    }


    // Dark theme - light theme
    themeButton.addEventListener('click', function() {              
        const themeIcon = themeButton.querySelector('i');

        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            themeIcon.classList.add('fa-moon');
            themeIcon.classList.remove('fa-sun');
            
        } else {
            body.classList.add('dark-mode');
            themeIcon.classList.add('fa-sun');
            themeIcon.classList.remove('fa-moon');
        }
    });
});