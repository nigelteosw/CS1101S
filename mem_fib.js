const mem = [];

function read(n) {
    return mem[n] === undefined
           ? undefined
           : mem[n];
}

function write(n, value) {
    mem[n] = value;
}

function m_fib(x) {
    // Base Case
    if (x === 1) { 
        write(0, 1);
        write(1,1);
        return 1;
    }
    // if x is not in the mem table, write the new value
    // into m, then return result
    if (is_undefined(read(x))) {
        let res = m_fib(x - 1) + m_fib(x - 2);
        write(x, res);
        return res;
    }
    // if x in mem, just read value stored in mem table
    else {
        return read(x);
    }
}


display(m_fib(15));
display(mem);