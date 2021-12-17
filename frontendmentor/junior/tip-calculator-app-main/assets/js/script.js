const billInput = document.querySelector('#bill-input');
const billContainer = document.querySelector('.input__bill > .input__container');
const tipSelect = document.querySelectorAll('[name="select-tip"]');
const tipCustom = document.querySelector('#input-tip-custom');
const tipCustomContainer = document.querySelector('.input__tip > .input__select > .input__container');
const peopleInput = document.querySelector('#people-input');
const peopleContainer = document.querySelector('.input__people > .input__container');
const resetButton = document.querySelector('#reset-button');

// Sets reset button to disabled initially.
document.querySelector('#reset-button').disabled = true;

// --- EVENT LISTENERS
// Sets reset button to disabled if both inputs are empty.
billInput.addEventListener('keyup', resetDisabled);
peopleInput.addEventListener('keyup', resetDisabled);
// Gives a highlighted border to container if input is in focus.
billInput.addEventListener('focusin', inputFocusIn);
tipCustom.addEventListener('focusin', inputFocusIn);
peopleInput.addEventListener('focusin', inputFocusIn);
// Sets border of container to warning color and display error message if input is out of focus and user didn't provide an input.
billInput.addEventListener('focusout', inputFocusOut);
tipCustom.addEventListener('focusout', inputFocusOut);
peopleInput.addEventListener('focusout', inputFocusOut);
// Computes for the Tip Amount / Person and Total / Person
for (let i = 0; i < tipSelect.length; i++) {
    tipSelect[i].addEventListener('click', computeOutput);
}
tipCustom.addEventListener('keyup', computeOutput);
// Resets all input and output values
resetButton.addEventListener('click', resetAll);


// --- FUNCTIONS

// Sets reset button to disabled if both inputs are empty.
function resetDisabled() {
    if (billInput.value === '' && peopleInput.value === '') { 
        document.querySelector('#reset-button').disabled = true;
    } else {
        document.querySelector('#reset-button').disabled = false;
    }
}

// Gives a highlighted border to container if input is in focus.
function inputFocusIn() {
    if (this === billInput) {
        billContainer.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--clr-primary');
        document.querySelector('.input__bill >  .input__label > .input__errormsg').style.visibility = 'hidden';
    }
    
    if (this === tipCustom) {
        tipCustomContainer.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--clr-primary');
    }
    
    if (this === peopleInput) {
        peopleContainer.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--clr-primary');
        document.querySelector('.input__people >  .input__label > .input__errormsg').style.visibility = 'hidden';
    }
}

// Sets border of container to warning color and display error message if input is out of focus and user didn't provide an input.
function inputFocusOut() {
    if (this === billInput && this.value === '') {
        billContainer.style.borderWidth = '2px';
        billContainer.style.borderStyle = 'solid';
        billContainer.style.borderColor = '#cd8378';
        document.querySelector('.input__bill >  .input__label > .input__errormsg').style.visibility = 'visible';
    } else if (this === peopleInput && this.value === '') {
        peopleContainer.style.borderWidth = '2px';
        peopleContainer.style.borderStyle = 'solid';
        peopleContainer.style.borderColor = '#cd8378';
        document.querySelector('.input__people >  .input__label > .input__errormsg').style.visibility = 'visible';
    }

    if (this === tipCustom) {
        tipCustomContainer.style.borderColor = '';
    }
}

function computeOutput() {
    if (billInput.value > 0 && peopleInput.value > 0) {
        if (this !== tipCustom) {
            tipCustom.value = '';
        }

        let tipAmount = (billInput.value * (this.value / 100)) / peopleInput.value;
        document.querySelector('.output__tip > .output__amount > .total__amount').innerHTML = Math.trunc(tipAmount * 100) / 100;


        let totalAmount = (billInput.value / peopleInput.value) + tipAmount;
        document.querySelector('.output__total > .output__amount > .total__amount').innerHTML = totalAmount.toFixed(2);
    }
}

function resetAll() {
    billInput.value = '';
    tipCustom.value = '';
    peopleInput.value = '';
    document.querySelector('.output__tip > .output__amount > .total__amount').innerHTML = (0).toFixed(2);
    document.querySelector('.output__total > .output__amount > .total__amount').innerHTML = (0).toFixed(2);
    document.querySelector('#reset-button').disabled = true;
}

