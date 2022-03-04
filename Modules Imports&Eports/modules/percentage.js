// MODULO
function modulo(first, second) {
    return first % second;
}

let modulo_form = document.getElementById('modulo-form');
modulo_form.addEventListener('change', function(e) {
    let modulo1 = Number(document.getElementById('modulo_1').value);
    let modulo2 = Number(document.getElementById('modulo_2').value);
    let modulo_result = document.getElementById('modulo_result');
    modulo_result.value = modulo(modulo1, modulo2);
});

// PERCENTAGE
function percentage(first, second) {
    return (first * second) / 100;
}

let percentage_form = document.getElementById('percentage-form');
percentage_form.addEventListener('change', function(e) {
    let percentage1 = Number(document.getElementById('percentage_1').value);
    let percentage2 = Number(document.getElementById('percentage_2').value);
    let percentage_result = document.getElementById('percentage_result');
    percentage_result.value = percentage(percentage1, percentage2);
});

// PERCENTAGE OF
function percentageOf(first, second) {
    return (first * 100) / second;
}

let percentageOf_form = document.getElementById('percentageOf-form');
percentageOf_form.addEventListener('change', function(e) {
    let percentageOf1 = Number(document.getElementById('percentageOf_1').value);
    let percentageOf2 = Number(document.getElementById('percentageOf_2').value);
    let percentageOf_result = document.getElementById('percentageOf_result');
    percentageOf_result.value = percentageOf(percentageOf1, percentageOf2);
});


// DIFFERENCE
function difference(first, second ) {
    let calc = second - first;
    return (calc * 100) / first 
}

let difference_form = document.getElementById('difference-form');
difference_form.addEventListener('change', function(e) {
    let difference1 = Number(document.getElementById('difference_1').value);
    let difference2 = Number(document.getElementById('difference_2').value);
    let difference_result = document.getElementById('difference_result');
    difference_result.value = difference(difference1, difference2);
});

export {modulo, percentage, percentageOf, difference};
 
