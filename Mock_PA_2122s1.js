function delta_encode(L) {
    if (is_null(L)) {
        return null;
    }
    else {
        let res = pair(head(L), null);
        for (let i = 1; i < length(L); i = i + 1) {
            let temp = list_ref(L, i) - list_ref(L, i - 1);
            res = pair(temp, res);
        }
        return reverse(res);
    }
}

/*
display("Question 1A");

display(delta_encode(null));
// returns null

display(delta_encode(list(9)));
// returns list(9)

display(delta_encode(list(3,4,6,-2,-2)));
// returns list(3,1,2,-8,0)
*/

function delta_decode(D) {
    if (is_null(D)) {
        return null;
    }
    else {
        let res = pair(head(D), null);
        let curr = head(D);
        for (let i = 1; i < length(D); i = i + 1) {
            curr = curr + list_ref(D, i);
            res = pair(curr, res);
        }
        return reverse(res);
    }
    
}



/*
display("Question 1B");

display(delta_decode(null));
// returns null

display(delta_decode(list(9)));
// returns list(9)

display(delta_decode(list(3,1,2,-8,0)));
// returns list(3,4,6,-2,-2)
*/


function runlength_encode(L) {
    if (is_null(L)) {
        return L;
    }
    else {
        function helper(first, count, rest, res) {
            if (is_null(rest)) {
                if (count !== 1) {
                    return reverse(pair(pair(first, count), res));
                }
                return reverse(res);
            }
            else if (first === head(rest)) {
                return helper(first, count + 1, tail(rest), res);
            }
            else {
                if (count !== 1) {
                    let temp = pair(first, count);
                    return helper(head(rest), 1, tail(rest), pair(temp, res));
                }
                else {
                    return helper(head(rest), 1, tail(rest), pair(first, res));
                }
            }
            
        }
        return helper(head(L), 1, tail(L), null);
    }
}

/*
display(runlength_encode(null));
// returns null

display(runlength_encode(list(9)));
// returns list(9)

display(runlength_encode(list(6,5,5,9,7,7,5,5,5)));
// returns list(6, [5,2], 9, [7,2], [5,3])
*/










