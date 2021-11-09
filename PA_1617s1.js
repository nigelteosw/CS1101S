// 16/17

function is_nucleobase(nucleobase) {
    return (nucleobase === "A")
        ? true
        : (nucleobase === "C")
        ? true
        : (nucleobase === "G")
        ? true
        : (nucleobase === "T")
        ? true
        : false;
}

// display(is_nucleobase("Otto"));
// display(is_nucleobase("A"));
// display(is_nucleobase("T"));


function is_dna_strand(lst) {
    if (is_null(lst)) {
        return true;
    }
    else {
        return is_nucleobase(head(lst)) && is_dna_strand(tail(lst));
    }
}

// display(is_dna_strand(list("A", "G", "A")));
// display(is_dna_strand(list("A", "B")));
// display(is_dna_strand(list("T", "G", "Otto")));



function oxoguanine_repair(lst) {
    if (is_null(lst)) {
        return null;
    }
    else {
        if (head(lst) === "8") {
            return pair("G", oxoguanine_repair(tail(lst)));
        }
        else {
            return pair(head(lst), oxoguanine_repair(tail(lst)));
        }
    }
}

// oxoguanine_repair(
//  list("A", "8", "A", "8", "C", "T", "A", "C"));
// returns list("A", "G", "A", "G", "C", "T", "A", "C")

function find_gene_start(lst) {
    if (is_null(lst)) {
        return null;
    }
    else if (length(lst) < 3) {
        return null;
    }
    else {
        const first = list_ref(lst, 0); 
        const second = list_ref(lst, 1);
        const third = list_ref(lst, 2);
        if ((first === "A") && (second === "T") && (third === "G")) {
            return list(tail(tail(tail(lst))));
        }
        else {
            return find_gene_start(tail(lst));
        }
    }
}


// display(find_gene_start(list("A", "C", "A", "T", "G", "T", "A", "C")));
// // returns list(list("T", "A", "C"))

// display(find_gene_start(list("A", "T", "A", "G", "T", "A", "T", "G")));
// // returns list(null)

// display(find_gene_start(list("A", "T", "A", "G", "T", "A", "C", "G")));
// // returns null


function find_gene_end(lst) {
    let combi1 = list("T", "A", "G");
    let combi2 = list("T", "A", "A");
    let combi3 = list("T", "G", "A");
    if (is_null(lst)) {
        return null;
    }
    else if (length(lst) < 3) {
        return null;
    }
    function helper(lst) {
        if (length(lst) < 3) {
            return null;
        }
        const first = list_ref(lst, 0); 
        const second = list_ref(lst, 1);
        const third = list_ref(lst, 2);
        const compare = list(first, second, third);
        if (equal(compare, combi1) || equal(compare, combi2) || equal(compare, combi3)) {
            return null;
        }
        else {
            return pair(first, helper(tail(lst)));
        }
    }
    let res = helper(lst);
    return (length(lst) -2  === length(res))
        ? null
        : pair(res, null);
}

// display(find_gene_end(list("A", "T", "A", "C", "T", "A", "G", 
//  "A", "T", "A", "A")));
// // returns list(list("A", "T", "A", "C"))

// display(find_gene_end(list("T", "G", "A", "A", "T", "A", "C")));
// // returns list(null)

// display(find_gene_end(list("A", "T", "A", "C", "C", "A", "G",
//  "A", "T")));
// // returns null




function all_different(nums) {
    if (length(nums) === 1) {
        return true;
    }
    if (!is_null(member(head(nums), tail(nums)))) {
        return false;
    }
    else {
        return all_different(tail(nums));
    }
}

// display(all_different(list(23)));
// // returns true
// display(all_different(list(2, 5, 1, 6, 7, 4, 3)));
// // returns true
// display(all_different(list(2, 6, 1, 7, 6, 4, 3)));
// // returns false

function is_valid_toto_set(nums, n, min, max) {
    let min_nums = head(nums);
    let max_nums = head(nums);
    for (let i = 0; i < length(nums); i = i + 1) {
        if (min_nums > list_ref(nums, i)){
            min_nums = list_ref(nums, i);
        }
        if (max_nums < list_ref(nums, i)) {
            max_nums = list_ref(nums, i);
        }
    }
    
    
    return !all_different(nums)
        ? false
        : (length(nums) !== n)
        ? false
        : (min_nums < min)
        ? false
        : !(max_nums > max);
}


// const nums = list(25, 13, 8, 14, 30, 3, 15);
// const n = 7;
// const min = 3;
// const max = 30; 
// is_valid_toto_set(nums, n, min, max);
// // returns true

function num_of_matches(numsA, numsB) {
    let res = 0;
    for (let i = 0; i < length(numsA); i = i + 1) {
        if (!is_null(member(list_ref(numsA, i), numsB))) {
            res = res + 1;
        }
    }
    return res;
}

// const numsA = list(23, 21, 30, 15, 40); 
// const numsB = list(3, 40, 15, 20 );
// num_of_matches(numsA, numsB);
// // returns 2

// const numsA = list(23, 21);
// const numsB = list(5, 4, 7);
// num_of_matches(numsA, numsB);
// // returns 0


function check_winning_group(bet_nums, draw_nums, extra_num) {
    let len = length(draw_nums);
    let sim = num_of_matches(bet_nums, draw_nums);
    return (sim === len)
        ? 1
        : (sim === len - 1)
        ? !is_null(member(extra_num, bet_nums)) ? 2 : 3
        : (sim === len - 2)
        ? !is_null(member(extra_num, bet_nums)) ? 4 : 5
        : 0;
            
}

// const bet_nums = list(40, 30, 1, 49, 23, 15);
// const draw_nums = list(23, 1, 30, 15, 40, 49);
// const extra_num = 27;
// check_winning_group(bet_nums, draw_nums, extra_num);
// // returns 1

// const bet_nums = list(40, 30, 1, 49, 27, 15);
// const draw_nums = list(23, 1, 30, 15, 40, 49);
// const extra_num = 27;
// check_winning_group(bet_nums, draw_nums, extra_num);
// // returns 2


function evaluate_BAE_tree(bae) {
    function helper(op) {
            return (op === "+") 
                ? (x,y) => x + y
                : (op === "-")
                ? (x,y) => x - y
                : (op === "*")
                ? (x,y) => x * y
                : (op === "/")
                ? (x,y) => x / y
                : error("op not found");
    }
    
    if (is_number(bae)) {
        return bae;
    }
    else {
        let first = list_ref(bae, 0);
        let op = list_ref(bae, 1);
        let second = list_ref(bae,2);
        
        return helper(op)(evaluate_BAE_tree(first), evaluate_BAE_tree(second));
        
    }
}

// const bae_tree = 123;
// evaluate_BAE_tree(bae_tree);
// // returns 123


// const bae_tree = list( list(2, "+", 5), "*", 100 );
// evaluate_BAE_tree(bae_tree);
// // returns 700


function build_BAE_tree(bae_list) {
    if (is_null(bae_list)) {
        return null;
    }
    else {
        let first = head(bae_list);
        if (first === "(") {
            return list(build_BAE_tree(tail(bae_list)));
        }
        else if (first === ")") {
           
        }
        else {
            return pair(first, build_BAE_tree(tail(bae_list)));
        }
    }
    
}



// const bae_list = list("(", "(", 2, "+", 5, ")", "*", 100, ")");
// build_BAE_tree(bae_list);
// returns a result equal to
// list( list(2, "+", 5), "*", 100 )


function evaluate_BAE(bae_list) {
    return evaluate_BAE(build_BAE_tree(bae_list));
}


function check_parentheses(lst) {
    let count = 0;
    let len = length(lst);
    if (len % 2 === 1) {
        return false;
    }
    else if ((head(lst) === ")") || (list_ref(lst, len - 1) === "(")) {
        return false;
    }
    else {
        for (let i = 0; i < len-1; i = i + 1) {
            if (list_ref(lst, i) === "(") {
                count = count + 1;
            }
            else {
                count = count - 1;
            }
            if (count < 0) {
                return false;
            }
        }
    }
    return true;
}


// const paren_list = list("(", "(", ")", ")");
// check_parentheses(paren_list);
// // returns true

// const paren_list = list("(", "(", ")", ")", ")", ")");
// check_parentheses(paren_list);
// // returns false

const paren_list = list("(", "(", ")", "(");
check_parentheses(paren_list);
// returns false














