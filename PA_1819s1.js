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
    
    function bint_to_num(bint) {
        let str = big_int_to_string(bint);
        
    }
    
}












