/**
 * Run-length compression encoding (similar concept came up in 20/21)
 **/
 
// Q1 - convert list to run length encoding
/**
 * I have a list of characters eg: list('a', 'b', 'c', 'c', 'd').
 * For some reason, my list of characters has many sequences of the same
 * character. I realised that such a representation is pretty inefficient,
 * so I want to compress it. The compression is simple:
 * 
 *      Sequences of the same letter occuring in the list consecutively 
 *      should be compressed to a pair (<letter>, n)
 *      Eg: list('a', 'a', 'a', 'b', 'b', 'c') will be compressed to
 *          list(pair('a', 3), pair('b', 2), pair('c', 1))
 * 
 * Write a function to compress a list of letters via this run-length
 * compression method. 
 * 
 * You can assume that lists will only contain letters and will have 
 * at least one element. 
 * 
 * Your function should not mutate the original list.
 **/
 
function run_length_compress(lst) {
    // Write solution below
    let newlst = reverse(lst);
    let count = 0;
    let item = head(newlst);
    let len = length(newlst);
    let res = null;
    for (let i = 0; i < len; i = i + 1) {
        if (list_ref(newlst, i) === item) {
            count = count + 1;
            item = list_ref(newlst, i);
        }
        else {
            let add_this = pair(item, count);
            res = pair(add_this,res);
            count = 1;
            item = list_ref(newlst, i);
        }
    }
    let add_this = pair(item, count);
    res = pair(add_this,res);
    return res;
}

// 1. should display list(["a", 3], ["b", 2], ["c", 1], ["b", 1])
display_list(run_length_compress(list('a', 'a', 'a', 'b', 'b', 'c', 'b')));

// 2. should display list(["a", 5])
display_list(run_length_compress(list('a', 'a', 'a', 'a', 'a')));

// 3. should display list(["a", 1], ["b", 1], ["c", 1], ["d", 1], ["e", 1])
display_list(run_length_compress(list('a', 'b', 'c', 'd', 'e')));


// Q2 - decode a run length encoding
/**
 * Given a run-length encoding, decode the original list.
 * So list(pair('a', 3), pair('b', 2), pair('c', 1)) will give
 *      list('a', 'a', 'a', 'b', 'b', 'c')
 * 
 * You can assume that the input will be a non-empty list of pairs
 * where first element of pair is a letter and second element is a number.
 * 
 * Don't mutate the original list. 
 * 
 * Feel free to add your own test-cases.
 **/

function run_length_decode(lst) {
    // Write solution below
    if (is_null(lst)) {
        return null;
    }
    else {
        let first = head(lst);
        let alphabet = head(first);
        let amount = tail(first);
        if (amount === 0) {
            return run_length_decode(tail(lst));
        }
        else {
            return pair(alphabet, run_length_decode(pair(pair(alphabet, amount - 1), tail(lst))));
        }
    }
}

// 1. should display list("a", "a", "a", "a", "a", "b", "a", "a", "a")
display_list(run_length_decode(list(pair('a', 5), pair('b', 1), pair('a', 3))));

// 2. should display list("b", "b", "b", "b")
// display_list(run_length_decode(list(pair('b', 4))));



