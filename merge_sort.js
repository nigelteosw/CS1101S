function merge_outer(arr) {
    // your solution here
    function middle(arr) {
        return math_floor(length(arr) / 2);
    }
    const help = 0;
    
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
    
    
    function merge_sort(xs) {
        if (is_null(xs) || is_null(tail(xs))) {
            return xs ;
        } else {
            const mid = middle(xs);
            return merge(merge_sort(take(xs, mid)) ,
                merge_sort(drop(xs, mid)));
        }
    }
    
    
    function merge(xs, ys) {
        if (is_null(xs)) {
            return ys ;
        } else if (is_null(ys)) {
            return xs ;
        } else {
            const x = head(xs);
            const y = head(ys);
            return (x < y)
                ? pair(x, merge(tail (xs), ys))
                : pair(y, merge(xs, tail(ys)));
        }
    }
    
    return merge_sort(arr);
}

// merge_outer(list(1,4,2,34,23,3,0,-5,3));