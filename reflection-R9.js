// Question 1
// function make_optimised_search(A) {
//     const len = array_length(A);
    
//     // make a local copy of input array A
//     const B = [];
//     for (let i = 0; i < len; i = i + 1) {
//         B[i] = A[i];
//     }
//     merge_sort(B);
//     return x => binary_search(B, x);
// }

// const my_array = [3,41,20,1,5,16,4,0,14,6,17,8,4,0,2];
// const my_search = make_optimised_search(my_array);
// my_search(3);

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

// memoized fib with only 2 variables
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










