function fixRoundingErrors(float) {
    return parseFloat(float.toFixed(2));
}

function calculateAspectRatio(originalWidth, originalHeight, newValue, valueType) {
    if ((originalHeight <= 0) || (originalWidth <= 0) || (newValue <= 0)) {
        return 0;
    }
    let formula = (valueType === "h") ?
        originalWidth / originalHeight :
        originalHeight / originalWidth;
    return fixRoundingErrors(formula * newValue);
}

// aspect ratio
let aspect_form = document.getElementById('aspect-form');
aspect_form.addEventListener('change', function(e) {
    let ratio1 = Number(document.getElementById('ratio_1').value);
    let ratio2 = Number(document.getElementById('ratio_2').value);
    let ratio_result_height = document.getElementById('ratio_result-height');
    let ratio_result_width = document.getElementById('ratio_result-width');
    let ratio_result_width_value = Number(document.getElementById('ratio_result-width').value);
    let ratio_result_height_value = Number(document.getElementById('ratio_result-height').value);
    ratio_result_height_value === 0 ? ratio_result_height.value = calculateAspectRatio(ratio1, ratio2, ratio_result_width_value) :
    ratio_result_width.value = calculateAspectRatio(ratio1, ratio2, ratio_result_height_value, 'h');
});
export {calculateAspectRatio};