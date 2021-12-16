const billInput = document.querySelector('#bill-input');
const billContainer = document.querySelector('#bill-container');
const tipCustom = document.querySelector('#input-tip-custom');
const tipCustomContainer = document.querySelector('#tip-custom-container');
const peopleInput = document.querySelector('#people-input');
const peopleContainer = document.querySelector('#people-container');

billInput.addEventListener('focusin', inputFocusIn);
billInput.addEventListener('focusout', inputFocusOut);
tipCustom.addEventListener('focusin', inputFocusIn);
tipCustom.addEventListener('focusout', inputFocusOut);
peopleInput.addEventListener('focusin', inputFocusIn);
peopleInput.addEventListener('focusout', inputFocusOut);

function inputFocusIn() {
    if (this === billInput) {
        billContainer.style.borderWidth = '2px';
        billContainer.style.borderStyle = 'solid';
        billContainer.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--clr-primary');
    } else if (this === tipCustom) {
        tipCustomContainer.style.borderWidth = '2px';
        tipCustomContainer.style.borderStyle = 'solid';
        tipCustomContainer.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--clr-primary');
    } else {
        peopleContainer.style.borderWidth = '2px';
        peopleContainer.style.borderStyle = 'solid';
        peopleContainer.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--clr-primary');
        document.querySelector('.input__errormsg').style.visibility = 'hidden';
    }
}

function inputFocusOut() {
    if (this === billInput) {
        billContainer.style.borderWidth = '';
        billContainer.style.borderStyle = '';
        billContainer.style.borderColor = '';
    } else if (this === peopleInput && this.value === '') {
        peopleContainer.style.borderWidth = '2px';
        peopleContainer.style.borderStyle = 'solid';
        peopleContainer.style.borderColor = '#cd8378';
        document.querySelector('.input__errormsg').style.visibility = 'visible';
    }
}

