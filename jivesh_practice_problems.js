// Practice problems - adapted from P-99

/**
 * Problem 1: Find out if a list is a palindrome (Medium)
 * (palindrome - a list is the same when reversed)
 * 
 * Eg:  is_palindrome(list(1, 2, 3)) -> false
 *      is_palindrome(list(1, 2, 1)) -> true
 * 
 * Assume lists only contain numbers.
 * 
 * Extension 1: Try a solution with O(1) extra space
 * Extension 2: Try drawing a box-and pointer explanation of how your code 
 *              works with a small example 
 * 
 * Note: neither of the extensions are necessary, extension 2 is if you're 
 *  hungry for practice, extension 1 is if you want to challenge yourself
 *  (it might be less relevant for th)
 **/
 
function is_palindrome(lst) {
    // Your code here
    function middle(arr) {
        return math_floor((length(arr) / 2));
    }
    
    function take(xs, n) {
        if (n === 0) {
            return null;
        } else {
            return pair(head(xs), take(tail(xs), n-1));
        }
    }
    
    function drop(xs, n) {
        if (n === 0) {
            return xs;
        } else {
            return drop(tail(xs), n-1);
        }
    }
    
    function reverse(lst) {
        function reverse_inner(lst, acc) {
            return is_null(lst)
                ? acc
                : reverse_inner(tail(lst), pair(head(lst), acc));
        }
        return reverse_inner(lst, null);
    }
    function drop_helper(lst) {
        return length(lst) % 2 === 0
            ? drop(lst, middle(lst))
            : drop(lst, middle(lst) + 1);
    }
    
    const front = take(lst, middle(lst));
    const back = drop_helper(lst);
    
    
    return equal(front, reverse(back));
}


// All the test cases should return true
function test_is_palindrome() {
    display("Test case: [1, 2, 3, 4, 5]");
    display("Expected output: false");
    display(is_palindrome(list(1, 2, 3, 4, 5)));
    display("-----------------");
    
    display("Test case: [1, 2, 3, 2, 1]");
    display("Expected output: true");
    display(is_palindrome(list(1, 2, 3, 2, 1)));
    display("-----------------");
    
    display("Test case: [1, 2, 3, 2]");
    display("Expected output: false");
    display(is_palindrome(list(1, 2, 3, 2)));
    display("----------");
    
    display("Test case: [1, 1, 1]");
    display("Expected output: true");
    display(is_palindrome(list(1, 1, 1)));
    display("------------------------------------------");
    display("------------------------------------------");
    display("------------------------------------------");
}

display("Testing the is_palindrome function.");
test_is_palindrome();


/**
 * Problem 2: Flatten a nested list (a bit harder)
 * 
 * Eg:  flatten(list(1, 2, 3, list(4, 5, 6))) ->
 *          list(1, 2, 3, 4, 5, 6)
 * 
 * Assume lists only contain numbers.
 * 
 * Extension 1: Box-and-pointer explanation
 * 
 **/
 
function flatten(lst) {
     // Your code here
     if (is_null(lst)) {
         return null;
     }
     else if (is_pair(head(lst))) {
         return append(head(lst), flatten(tail(lst)));
     }
     else {
         return pair(head(lst), flatten(tail(lst)));
     }
 }


function test_flatten() {
    display("Everything below should return true");
    display(equal(flatten(list(list(1), list(2, 3, 4, 5))), list(1, 2, 3, 4, 5)));
    display(equal(flatten(list(1, 2, 3, 2, 1)), list(1, 2, 3, 2, 1)));
    display("------------------------------------------");
    display("------------------------------------------");
    display("------------------------------------------");
}

display("Testing the flatten function");
test_flatten();

/**
 * Problem 3: Remove consecutive duplicates in a list (let's call it prune)
 * (medium)
 * 
 * Eg:  prune(list(1, 1, 1, 2, 2, 3, 3, 3,)) -> list(1, 2, 3)
 *      prune(list(1, 2, 2, 2, 3, 4, 5, 4)) -> list(1, 2, 3, 4, 5, 4)
 * 
 * Assume lists only contain numbers.
 * 
 * Extension 1: Box-and-pointer explanation
 * Extension 2: Use accumulate in your solution
 * 
 **/

function prune(lst) {
    // Your code here
    if (is_null(lst)) {
        return null;
    }
    else if (length(lst) < 2) {
        return lst;
    }
    else {
        const first = head(lst);
        const second = head(tail(lst));
        if (first === second) {
            return prune(tail(lst));
        }
        else {
            return pair(first, prune(tail(lst)));
        }
    }
} 

function test_prune() {
    display("Everything below should return true");
    display(equal(prune(list(1, 1, 1, 2, 2, 3)), list(1, 2, 3)));
    display(equal(prune(list(1, 1, 2, 1, 3, 3)), list(1, 2, 1, 3)));
    display("------------------------------------------");
    display("------------------------------------------");
    display("------------------------------------------");
}

display("Testing the prune function");
test_prune();

 
 
 
 
 
 
 
 
 
 