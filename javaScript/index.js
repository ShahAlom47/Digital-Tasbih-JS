let subInBtn = document.getElementById('sub-in-btn');
let subDecBtn = document.getElementById('sub-dec-btn');
let subDisplay = document.getElementById('sub-display');

let alhamInBtn = document.getElementById('alham-in-btn');
let alhamDecBtn = document.getElementById('alham-dec-btn');
let alhamDisplay = document.getElementById('alham-display');


let allInBtn = document.getElementById('all-in-btn');
let allDecBtn = document.getElementById('all-dec-btn');
let allDisplay = document.getElementById('all-display');



let resetBtn = document.getElementById('reset-btn');



let subDisplayValue = 0;
let alhamDisplayValue = 0;
let allDisplayValue = 0;

// for subhan allah 
subInBtn.addEventListener('click', function () {
    if (subDisplayValue === 33) {
        return alert("Subhan allah is completed..fill other")
    }

    subDisplayValue++;
    subDisplay.innerText = subDisplayValue;
})

subDecBtn.addEventListener('click', function () {
    if (subDisplayValue === 0) {
        return alert(" Valu is 0 .Can't accept nagativ value")
    }

    subDisplayValue--;
    subDisplay.innerText = subDisplayValue;
})




// for Alhamdulillah
alhamInBtn.addEventListener('click', function () {
    if (alhamDisplayValue === 33) {
        return alert("Alhamdulillah is completed..fill other")
    }

    alhamDisplayValue++;
    alhamDisplay.innerText = alhamDisplayValue;
})

alhamDecBtn.addEventListener('click', function () {
    if (alhamDisplayValue === 0) {
        return alert(" Valu is 0 .Can't accept nagativ value")
    }

    alhamDisplayValue--;
    alhamDisplay.innerText = alhamDisplayValue;
})




// for Allahu Akbar
allInBtn.addEventListener('click', function () {
    if (allDisplayValue === 34) {
        return alert("Allahu akbar is completed..fill other")
    }

    allDisplayValue++;
    allDisplay.innerText = allDisplayValue;
})

allDecBtn.addEventListener('click', function () {
    if (allDisplayValue === 0) {
        return alert(" Valu is 0 .Can't accept nagativ value")
    }

    allDisplayValue--;
    allDisplay.innerText = allDisplayValue;
})


// reset 

resetBtn.addEventListener('click',function(){

    subDisplay.innerText = 0;
    alhamDisplay.innerText = 0;
    allDisplay.innerText = 0;

})