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
    
    let curr_dist = Infinity;
    let curr_route = undefined;
    let other_houses = remove(start, enum_list(0, n - 1));
    let routes = map(p => pair(start, append(p, list(start))), permutations(other_houses));
    
    function helper(routes) {
        if (is_null(routes)) {
            return pair(curr_route, curr_dist);
        }
        else {
            let now_dist = route_distance(mat, head(routes));
            if (now_dist < curr_dist) {
                curr_dist = now_dist;
                curr_route = head(routes);
            }
            return helper(tail(routes));
        }
    }
    return helper(routes);
}

shortest_paper_route(n, mat, 1);


const bae = [[[8, "-", 2], "*", [7, "+", 3]], "+", 2];

function make_postfix_exp(bae) {
    let res = [];
    function inner(bae) {
        if (is_number(bae)) {
            res[array_length(res)] = bae;
        }
        else {
            let first = bae[0];
            let second = bae[1];
            let third = bae[2];
            list(inner(first), inner(third));
            res[array_length(res)] = second;
            
            
        }
    }
    inner(bae);
    return res;
}

// make_postfix_exp(bae);

function eval_postfix_exp(pfe) {
    let stack = null;
    
    function push(x) {
        stack = pair(x, stack);
    }
    
    function pop() {
        let temp = head(stack);
        stack = tail(stack);
        return temp;
    }
    
    function helper(op) {
        return (op === "+")
            ? (x,y) => x + y
            : (op === "-")
            ? (x,y) => x -y
            : (op === "*") 
            ? (x, y) => x * y
            : (op === "/")
            ? (x, y) => x / y
            : error("op not found");
    }
    
    for (let i = 0; i < array_length(pfe); i = i + 1) {
        const curr = pfe[i];
        
        if (is_number(curr)) {
            push(curr);
        }
        
        else {
            const first = pop();
            const second = pop();
            let temp = helper(curr)(second,first);
            push(temp);
            
        }
    }
    return head(stack);
}

// eval_postfix_exp([8,2,"-",7,3,"+","*"]);






