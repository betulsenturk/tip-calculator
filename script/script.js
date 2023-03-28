
const btnList = document.querySelectorAll("button");

const bill = document.getElementById('bill');

const people = document.getElementById('people');

const custom = document.getElementById('custom');

const zero = document.getElementById("zero");

const reset = document.getElementById("reset");

const tipAmountPlace = document.getElementById("tip-amount");

const totalPlace = document.getElementById("total");

const inputContainerList = document.querySelectorAll(".text");

const inputList = document.querySelectorAll(".input-field");

window.storedValue = 0;
window.billValue = 0;
window.peopleValue = 0;


btnList.forEach(btn => {
    btn.addEventListener('click', () => {

        document.querySelector('.active')?.classList.remove('active');
        btn.classList.add('active');
        document.querySelector('.active-input')?.classList.remove('active-input');

        custom.value = '';
        window.storedValue = btn.value;

        if(window.peopleValue != 0){
            hesapla(window.storedValue, window.billValue, window.peopleValue);
        }
    })
})

custom.addEventListener('input', () => {

    document.querySelector('.active')?.classList.remove('active');
    window.storedValue = custom.value;

    hesapla(window.storedValue, window.billValue, window.peopleValue);
})

inputList.forEach(input => {
    input.addEventListener('input', () => {

        window.billValue = Number(bill.value);
        window.peopleValue = Number(people.value);

        if(window.peopleValue == 0){
            zero.style.visibility = "visible";
            document.querySelector('.people-number').classList.add('active-zero');
        }
        else
        {
            zero.style.visibility = "hidden";
            document.querySelector('.active-zero')?.classList.remove('active-zero');
            hesapla(window.storedValue, window.billValue, window.peopleValue);
        }
    })
})

inputContainerList.forEach(input => {
    input.addEventListener('click', () => {

        if(input.id == "people-number" && window.peopleValue == 0){
            document.querySelector('.people-number').classList.add('active-zero');
        }
        else{
            document.querySelector('.people-number')?.classList.remove('active-zero');
            document.querySelector('.active-input')?.classList.remove('active-input');
            input.classList.add('active-input');
        }
    })
})

reset.addEventListener('click', ()=>{
    window.storedValue = 0;
    window.billValue = 0;
    window.peopleValue = 0;

    tipAmountPlace.innerHTML = "$0.00";
    totalPlace.innerHTML = "$0.00";

    document.querySelector('.active')?.classList.remove('active');
    document.querySelector('.active-zero')?.classList.remove('active-zero');

    zero.style.visibility = "hidden";
})

function hesapla(tipValue, billValue, peopleValue){
    
    var tipAmount = billValue * tipValue / 100 / peopleValue;
    var total = (billValue / peopleValue) + tipAmount;

    tipAmountPlace.innerHTML = "$" + tipAmount.toFixed(2);

    totalPlace.innerHTML = "$" + total.toFixed(2);
}