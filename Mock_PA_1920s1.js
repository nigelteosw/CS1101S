// 19/20 PA

function make_k_list(k, d) {
    if (d === 0) {
        return 0;   
    }
    else {
        return build_list(x => make_k_list(k, d-1), k);
    }
}


// make_k_list(2, 3);

const klistB = list(list(0,6,3),list(8,6,10),list(5,1,25));

function sum_k_list(klist) {
    if (is_null(klist)) {
        return 0;
    }
    else if (is_number(klist)) {
        return klist;
    }
    else if (is_list(klist)) {
        return sum_k_list(head(klist)) + sum_k_list(tail(klist));
    }
}

// sum_k_list(klistB);


function map_k_list(f, klist) {
    if (is_null(klist)) {
        return null;
    }
    else if (is_number(klist)) {
        return f(klist);
    }
    else if (is_list(klist)) {
        return pair(map_k_list(f, head(klist)), map_k_list(f, tail(klist)));
    }
}

// map_k_list(x => 2 * x, klistB);

const mat = [[0,1,2,3],[2,0,5,6],[3,3,0,4],[4,4,5,0]];
const route = list(2,1,3,1);
const n = array_length(mat);

function route_distance(mat, route) {
    if (length(route) < 2) {
        return 0;
    }
    else {
        let first = head(route);
        let second = head(tail(route));
        if (first === second) {
            return route_distance(mat, tail(route));
        }
        else {
            return (mat[first][second] + route_distance(mat, tail(route)));
        }
    }
}

// route_distance(mat, route);

function shortest_paper_route(n, mat, start) {
    
    function permutations(s) {
        return is_null(s)
            ? list(null)
            : accumulate(append, null, map(x => 
                map(p => pair(x, p), permutations(remove(x, s))), s));
            
    }
    
    let perm_list = remove(start, enum_list(0, n - 1));
    display(permutations(perm_list));
    return accumulate(x => pair(1, x) , null, permutations(perm_list));
}

// shortest_paper_route(n, mat, 1);


const bae = [[8, "-", 2], "*", [7, "+", 3]];

function make_postfix_exp(bae) {
    let res = [];
    function inner(bae) {
        if (is_number(bae)) {
            return bae;
        }
        else {
            let first = bae[0];
            let second = bae[1];
            let third = bae[2];
             res[array_length(res)] = first;
        }
    }
    inner(bae);
    return res;
}

make_postfix_exp(bae);




