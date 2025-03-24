document.addEventListener('DOMContentLoaded', function() {
    
    const body = document.querySelector('body');
    const themeButton = document.getElementById('theme-button');
    const amountSlider = document.getElementById('amount');
    const monthsSlider = document.getElementById('term');
    const monthsDisplay = document.getElementById('term-value');
    const amountDisplay = document.getElementById('amount-value');
    const monthlyPaymentDisplay = document.getElementById('monthly-payment');

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

    function updateSliders(){
        let amount = Math.round(parseInt(amountSlider.value, 10) / 100) * 100;
        const months = parseInt(monthsSlider.value, 10);
        
        amountDisplay.textContent = amount + "€";
        monthsDisplay.textContent = months + " mēneši";
    }

    amountSlider.addEventListener('input', function(){
        updateSliders();
        calculateMonthlyPayment();
    });

    monthsSlider.addEventListener('input', function(){
        updateSliders();
        calculateMonthlyPayment();
    });
    updateSliders();

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