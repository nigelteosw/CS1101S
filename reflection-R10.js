const x = stream_map(display, enum_stream(0, 10));
//stream_ref(x, 3);
// stream_ref(x, 5);

// const y = display(1+1);
// 1 + y;
// returns 3 as display does 2 things, display and returns evaluation

function memo_fun(fun) {
    let already_run = false;
    let result = undefined;
    function mfun() {
        if (!already_run) {
            result = fun();
            already_run = true;
            return result;
        } else {
            return result;
        }
    }
    return mfun;
}

function stream_map_optimized(f, s) {
    return is_null(s)
        ? null
        : pair(f(head(s)),
        memo_fun( () => stream_map_optimized(
        f, stream_tail(s)) ));
}

stream_map_optimized(stream_ref, x);


function add_streams(s1, s2) {
    if (is_null(s1)) {
        return s2;
    } else if (is_null(s2)) {
        return s1;
    } else {
        return pair(head(s1) + head(s2),
        () => add_streams(stream_tail(s1),
        stream_tail(s2)));
    }
}


const integers = integers_from(1);

function partial_sums(s) {
    function inner(s, acc) {
        if (is_null(s)) {
            return acc;
        }
        else {
            return pair(head(s) + acc, () => inner(stream_tail(s), acc + head(s)));
        }
    }
    return inner(s, 0);
}

function partial_sums_add(s) {
    if (is_null(s)) {
        return 0;
    }
    else {
    
    }
}

// eval_stream(partial_sums(integers),5);