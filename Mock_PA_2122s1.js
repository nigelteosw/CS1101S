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
display("Question 2A")

display(runlength_encode(null));
// returns null

display(runlength_encode(list(9)));
// returns list(9)

display(runlength_encode(list(6,5,5,9,7,7,5,5,5)));
// returns list(6, [5,2], 9, [7,2], [5,3])
*/


function runlength_decode(R) {
    if (is_null(R)) {
        return null;
    }
    else {
        if (is_number(head(R))) {
            return pair(head(R), runlength_decode(tail(R)));
        }
        else if (is_pair(head(R))) {
            let num = head(head(R));
            let count = tail(head(R));
            if (count === 1) {
                return pair(num, runlength_decode(tail(R)));
            }
            else {
                return pair(num, runlength_decode(pair(pair(num, count-1), tail(R))));
            }
        } 
    }
}


/*
display("Question 2B");

display(runlength_decode(null));
// returns null

display(runlength_decode(list(9)));
// returns list(9)

display(runlength_decode(list(6, pair(5,2), 9, pair(7,2), pair(5,3))));
// returns list(6,5,5,9,7,7,5,5,5)
*/

// Feel free to use these functions:
const get_x = (aar) => list_ref(aar, 0);
const get_y = (aar) => list_ref(aar, 1);
const get_width = (aar) => list_ref(aar, 2);
const get_height = (aar) => list_ref(aar, 3);

function smallest_bounding_AAR_area(rs) {
    function max_bb(aa1, aa2) {
        let min_x = math_min(get_x(aa1), get_x(aa2));
        let min_y = math_min(get_y(aa1), get_y(aa2));
        let max_x = math_max(get_x(aa1) + get_width(aa1), 
                        get_x(aa2) + get_width(aa2));
        let max_y = math_max(get_y(aa1) + get_height(aa1), 
                        get_y(aa2) + get_height(aa2));
        let w = max_x - min_x;
        let h = max_y - min_y;
        return list(min_x, min_y, w, h);
    }
    let res = accumulate(max_bb, head(rs), tail(rs));
    return get_width(res) * get_height(res);
}

/*
display("Question 3A");

const aar1 = list(2, 3, 10, 15);
const aar2 = list(1, 4, 20, 8 );
display(smallest_bounding_AAR_area( list(aar1, aar2) ));
// returns 300  (the smallest bounding AAR is list(1, 3, 20, 15))
*/

function optimized_smallest_bounding_AAR_area(rs) {
    function max_bb(aa1, aa2) {
        let w1 = math_min(get) 
    }
    
}


const aar1 = list(2, 3, 10, 15);
const aar2 = list(1, 4, 20, 8 );
display(optimized_smallest_bounding_AAR_area( list(aar1, aar2) ));
// returns 200








