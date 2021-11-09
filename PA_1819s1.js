// 18/19

function make_big_int_from_number(num) {
    
    function helper(num) {
        
        if (num < 10) {
            return pair(num, null);
        }
        else {
            let curr = num % 10;
            return pair(curr, helper(math_floor(num/10)));
        }
    }
    return (helper(num));
}

// make_big_int_from_number(0);
// make_big_int_from_number(1234);

function big_int_to_string(bint) {
    let res = "";
    let len = length(bint) - 1;
    for (let i = len; i >= 0; i = i - 1) {
        res = res + stringify(list_ref(bint, i));
    }
    return res;
} 

// big_int_to_string(list(0, 0, 3, 2, 1, 8, 8, 8));

function big_int_add(bintX, bintY) {
    
    function inner(x, y, carry) {
        if (is_null(x) && is_null(y)) {
            return (carry === 0) ? null : pair(carry, null);
        }
        else {
            const xdigit = is_null(x) ? 0 : head(x);
            const ydigit = is_null(y) ? 0 : head(y);
            const sum = xdigit + ydigit + carry;
            const new_digit = sum % 10;
            const new_carry = (sum - new_digit) / 10;
            return pair(new_digit, 
                inner(is_null(x) ? x : tail(x),
                    is_null(y) ? y : tail(y), new_carry));
        }
    }
    
    return inner(bintX, bintY, 0);
}

// big_int_add(list(7, 8, 9), list(5, 6));
// returns list(2, 5, 0, 1) 


function big_int_mult_by_digit(bint, digit) {
    if (digit === 0) {
        return null;
    }
    else {
        return big_int_add(bint, big_int_mult_by_digit(bint, digit - 1));
    }
    
    
}

// big_int_mult_by_digit(list(7, 4, 3), 5);
// returns list(5, 3, 7, 1)

function big_int_mult_by_10_pow_n(bint, n) {
    if (n === 0) {
        return bint;
    }
    else {
        return big_int_mult_by_digit(bint, bint);
    }
}



