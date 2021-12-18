// Type your program in here!
function interleave(n, c) {
    
    function inner(n, c) {
        if (n === 0) {
            return c;
        }
        else if (c === 0) {
            return n;
        }
        else {
            display(pair(n,c));
            let test = c % 10;
            return test + 10 * inner(math_floor(c/10), n);
        }
    }
    
    function len_num(x) {
        let i = 0;
        let num = x;
        while (num > 1) {
            num = num / 10;
            i = i + 1;
        }
        return i;
    }
    
    let len_a = len_num(n);
    let len_b = len_num(c);
    if (len_a === len_b) {
        return inner(n, c);
    }
    else {
        let temp = 0;
        let diff = math_abs(len_a-len_b);
        if (len_a > len_b) {
            temp = n % (math_pow(10, diff));
            let res = inner(math_floor(n / math_pow(10, diff)), c);
            return res * math_pow(10,diff) + temp;
        }
        else {
            temp = c % (math_pow(10, diff));
            let res = inner(n, math_floor(c / math_pow(10, diff)));
            return res * math_pow(10,diff) + temp;
        }
    }
    
    
}

// interleave(135, 24678);
interleave(12, 4);
// should return 1423
