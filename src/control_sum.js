const control_sum = (number) => {
    var sum = 0;
    var digits = number.split("").reverse();
    digits.map( (element, index) => {
        sum = sum + element * (index + 1);

    });
    if (sum == NaN)
        return false;
    return (sum % 11 == 0);
}

const validate = (number) => {

    if (number.length != 9)
        return false;
    else
        return control_sum(number);
}


export default validate;
