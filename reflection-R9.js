// Question 1
function make_optimised_search(A) {
    function split(xs, start, stop) {
        let res = [];
        for (let c = start; c < stop; c = c + 1){
            res[array_length(res)] = A[c];
        }
        return res;
    }
    
    function optimised_search(A, x) {
        let len = array_length(A);
        let mid = math_floor(len/2);
        let left = split(A, 0, mid);
        let right = split(A, mid+1, len);
        if (x === left[0] || x === right[0]){
            return true;
        }
        return optimised_search(left, x) || optimised_search(right, x);
    }
    return x => optimised_search(A, x);
}

const my_array = [3,41,20,1,5,16,4,0,14,6,17,8,4,0,2];
const my_search = make_optimised_search(my_array);
my_search(3);

// Question 2
// memoized fib with table
function m_fib(n) {
    let table = [1,1];
    for (let i = 2; i < n ; i = i + 1) {
        table[i] = table[i-1] + table[i-2];
        display(table);
    }
    return table[n-1];
}

// display(m_fib(6));

// memoized fib with only 2 varibles
function op_fib(n) {
    let a = 0;
    let b = 1;
    if (n <= 1) {
        return b;
    }
    else {
        for (let i = 1; i < n ; i = i + 1) {
            let temp = a;
            a = b;
            b = b + temp;
        }
        return b;
    }
}

// display(op_fib(6));










