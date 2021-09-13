// Q1
function remove_duplicates(lst) {
    return accumulate((current, y) => pair(current, filter(x => x !== current, y)),
                    list(),
                    lst);
}

// display(remove_duplicates(list(1,1,2,3,4,4,5,5)));


// Q2
function subsets(lst) {
    if (is_null(lst)) {
        return list(list());
    }
    else {
        const res = subsets(tail(lst));
        
        const include_head = map(x => pair(head(lst), x), res);
        
        const exclude_head = res;
        
        return append(include_head, exclude_head);
    }
}

display(subsets(list(1,2,3)));
// subsets(list(1,2,3));

// Q3
function permutations(lst) {
    if (is_null(lst)) {
        return list(list());
    }
    else {
        return 
    }
    
}